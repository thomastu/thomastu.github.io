---
title: Postgres Upserts With SQLAlchemy
description: Some small recipes I commonly use to implement "upsert" patterns in sqlalchemy in my data engineering projects.
date: 11/23/2021
published: true
author:
    name: Thomas Tu
---

# Motivation

Most data engineers know the pain of having to handle change data capture in a data pipeline. One common pattern to approach change data capture is the "upsert."  In the relational DB context, an upsert typically is made up of two steps:

1.  Check for existence of a row given a set of identifiers
2.  Based on (1), either create a row or udpate non-identifying data.

In a transactional database / business application context, this is fairly common and trivial to implement. It is so common, frameworks like Django have convenience methods for these basic query patterns - 

```python
from myapp.models import MyModel

obj, created = MyModel.objects.update_or_create(
  **{"id_field_1": 1, "id_field_2": "foo"}, # Identifying data, typically representing a valid table grain
  defaults={"data_field": "some-value"} # Non identifying data
)
```

But in a data warehousing context, we are typically less interested in row-by-row inserts and are more interested in how we can update large batches of rows performantly. If you are using something like `dbt` you are probably familiar with ["incremental models"](https://docs.getdbt.com/docs/building-a-dbt-project/building-models/configuring-incremental-models). However, for the subset of python developers out there who often have to move between web application development to data engineering, and life is just easier if you have your entire workflow in python, what does the python ecosystem look like to support this context? To set up a motivation for this, imagine we have the following components:

- A source data system populated by some business application
- A dimensional data warehouse with a daily refresh cadence (i.e. *not* real time)
- A very traditional ETL pipeline between the source system and the datawarehouse
- Some BI users downstream which rely on the datawarehouse.

Some difficult problems we have to contend with:

- How should we handle upstream schema changes? (especially if those schema changes modify the table grain?)
- How do we determine what to do with data that have been removed from source systems?
- How do we filter for data that should be updated?

# Recipes

There are several ways to implement an upsert pattern, but here are a few that I commonly use depending on use case. Not for lack of trying, I haven't really found a common nomenclature to describe these patterns, but I will try my best to be specific and articulate here.

## Environment Setup

```
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session

Base = automap_base()
Base.prepare(engine, reflect=True)
```

## Deletion with Replacement

Let's start with the simplest, fastest way to implement a basic upsert.

```python
import sqlalchemy as sa

from datetime import datetime, timedelta

# This can be a SQLAlchemy table or perhaps you are using SQLAlchemy orm
from myapp.models import Target

yesterday = datetime.today() - timedelta(days=1)

target_session = sa.orm.sessionmaker(autocommit=False, autoflush=True, bind=sa.create_engine("postgresql://admin:s3cur3-passw0rd@dbhost:5432/datawarehouse"))()

to_delete = sa.select(Target).where(
  Target.last_synchronized >= yesterday
).delete()

target_session.execute(to_delete)

def parse_row(row: Dict): -> Dict
    # Row-level transformations go here
    return row

target_session.bulk_insert_mappings(
    Target,
    (parse_row(row) for row in source_session.execute(sa.select(Source).where(Source.last_updated >= yesterday))
)
```


### Advantages


todo..

- easy to write
- source synchronization is guaranteed up to the refresh cadence

### Disadvantages

todo...

- try doing this on a dimension table : X
- we are deleting data


## `ON CONFLICT` ...

todo ...


