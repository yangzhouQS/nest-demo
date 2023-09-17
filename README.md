## 概述

```
D:\2026\DEMO\NEST-DEMO\SRC
    app.controller.spec.ts
    app.controller.ts
    app.module.ts
    app.service.ts
    main.ts
```

以下是这些核心文件的简要概述：

| `app.controller.ts`      | 具有单一路由的基本控制器。                                   |
| ------------------------ | ------------------------------------------------------------ |
| `app.controller.spec.ts` | 控制器的单元测试。                                           |
| `app.module.ts`          | 应用的根模块。                                               |
| `app.service.ts`         | 具有单一方法的基本服务。                                     |
| `main.ts`                | 使用核心函数 `NestFactory` 创建 Nest 应用实例的应用入口文件。 |

## 控制器

控制器负责处理传入的 **requests** 并将 **responses** 返回给客户端。

 ![img](asset/README/Controllers_1.png)

制器的目的是接收应用的特定请求。 **routing** 机制控制哪个控制器接收哪些请求。 通常，每个控制器都有不止一条路由，不同的路由可以执行不同的操作。

为了创建一个基本的控制器，我们使用类和 **decorators**。 装饰器将类与所需的元数据相关联，并使 Nest 能够创建路由映射（将请求绑定到相应的控制器）。



#### 路由[#](https://nest.nodejs.cn/controllers#路由)

在下面的示例中，我们将使用 `@Controller()` 装饰器，即 **required** 来定义一个基本控制器。 我们将指定 `cats` 的可选路由路径前缀。 在 `@Controller()` 装饰器中使用路径前缀可以让我们轻松地对一组相关路由进行分组，并最大限度地减少重复代码。 例如，我们可以选择将一组路由分组，这些路由管理与路由 `/cats` 下的猫实体的交互。 在这种情况下，我们可以在 `@Controller()` 装饰器中指定路径前缀 `cats`，这样我们就不必为文件中的每个路由重复该部分路径。

```ts
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```





#### 请求对象[#](https://nest.nodejs.cn/controllers#请求对象)

处理程序通常需要访问客户端 **request** 的详细信息。 Nest 提供对底层平台 [请求对象](https://express.nodejs.cn/en/api.html#req) 的访问（默认为 Express）。 我们可以通过将 `@Req()` 装饰器添加到处理程序的签名来指示 Nest 注入它来访问请求对象。

```ts
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api')
  getApi(): Record<string, any> {
    return {
      a: 1,
      b: 2,
      version: '1.3.0',
    };
  }

  @Get('/search')
  search(@Query() search): Record<string, any> {
    console.log(search);
    return {
      keyword: search,
      t: Date.now(),
    };
  }
}
```

请求对象表示 HTTP 请求，并具有请求查询字符串、参数、HTTP 标头和正文的属性（阅读更多 [此处](https://express.nodejs.cn/en/api.html#req)）。 在大多数情况下，没有必要手动获取这些属性。 我们可以使用开箱即用的专用装饰器，例如 `@Body()` 或 `@Query()`。 下面是提供的装饰器列表和它们代表的普通平台特定对象。

| `@Request(), @Req()`       | `req`                               |
| -------------------------- | ----------------------------------- |
| `@Response(), @Res()`***** | `res`                               |
| `@Next()`                  | `next`                              |
| `@Session()`               | `req.session`                       |
| `@Param(key?: string)`     | `req.params` / `req.params[key]`    |
| `@Body(key?: string)`      | `req.body` / `req.body[key]`        |
| `@Query(key?: string)`     | `req.query` / `req.query[key]`      |
| `@Headers(name?: string)`  | `req.headers` / `req.headers[name]` |
| `@Ip()`                    | `req.ip`                            |
| `@HostParam()`             | `req.hosts`                         |

\* 为了与跨底层 HTTP 平台（例如 Express 和 Fastify）的类型兼容，Nest 提供了 `@Res()` 和 `@Response()` 装饰器。 `@Res()` 只是 `@Response()` 的别名。 两者都直接暴露底层原生平台 `response` 对象接口。 使用它们时，你还应该导入底层库（例如 `@types/express`）的类型以充分利用它们。 请注意，当你在方法处理程序中注入 `@Res()` 或 `@Response()` 时，你将 Nest 放入该处理程序的 **库特定模式** 中，并且你负责管理响应。 这样做时，你必须通过调用 `response` 对象（例如，`res.json(...)` 或 `res.send(...)`）来触发某种响应，否则 HTTP 服务器将挂起。













 