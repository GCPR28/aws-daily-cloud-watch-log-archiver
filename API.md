# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DailyCloudWatchLogArchiver <a name="DailyCloudWatchLogArchiver" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver"></a>

#### Initializers <a name="Initializers" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer"></a>

```typescript
import { DailyCloudWatchLogArchiver } from '@gcpr28/aws-daily-cloud-watch-log-archiver'

new DailyCloudWatchLogArchiver(scope: Construct, id: string, props: DailyCloudWatchLogArchiverProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.props">props</a></code> | <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps">DailyCloudWatchLogArchiverProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.props"></a>

- *Type:* <a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps">DailyCloudWatchLogArchiverProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.isConstruct"></a>

```typescript
import { DailyCloudWatchLogArchiver } from '@gcpr28/aws-daily-cloud-watch-log-archiver'

DailyCloudWatchLogArchiver.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### DailyCloudWatchLogArchiverProps <a name="DailyCloudWatchLogArchiverProps" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps"></a>

#### Initializer <a name="Initializer" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps.Initializer"></a>

```typescript
import { DailyCloudWatchLogArchiverProps } from '@gcpr28/aws-daily-cloud-watch-log-archiver'

const dailyCloudWatchLogArchiverProps: DailyCloudWatchLogArchiverProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps.property.schedules">schedules</a></code> | <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleProperty">ScheduleProperty</a>[]</code> | *No description.* |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps.property.targetBucket">targetBucket</a></code> | <code>string</code> | *No description.* |

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps.property.schedules"></a>

```typescript
public readonly schedules: ScheduleProperty[];
```

- *Type:* <a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleProperty">ScheduleProperty</a>[]

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@gcpr28/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps.property.targetBucket"></a>

```typescript
public readonly targetBucket: string;
```

- *Type:* string

---

### ScheduleProperty <a name="ScheduleProperty" id="@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleProperty"></a>

#### Initializer <a name="Initializer" id="@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleProperty.Initializer"></a>

```typescript
import { ScheduleProperty } from '@gcpr28/aws-daily-cloud-watch-log-archiver'

const scheduleProperty: ScheduleProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.target">target</a></code> | <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty">ScheduleTargetProperty</a></code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.target"></a>

```typescript
public readonly target: ScheduleTargetProperty;
```

- *Type:* <a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty">ScheduleTargetProperty</a>

---

### ScheduleTargetProperty <a name="ScheduleTargetProperty" id="@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty"></a>

#### Initializer <a name="Initializer" id="@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty.Initializer"></a>

```typescript
import { ScheduleTargetProperty } from '@gcpr28/aws-daily-cloud-watch-log-archiver'

const scheduleTargetProperty: ScheduleTargetProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty.property.destinationPrefix">destinationPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `destinationPrefix`<sup>Required</sup> <a name="destinationPrefix" id="@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty.property.destinationPrefix"></a>

```typescript
public readonly destinationPrefix: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@gcpr28/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---



