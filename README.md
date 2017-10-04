> NOTE: Experimental code.

## Usage

Copy the file into your project.

To initialise and configure the logger do the following in your app.module.ts:

```typescript
import { LoggerLevels, LoggerModule } from './utils/logger';

...

imports: [
    ...
    LoggerModule.forRoot({level: LoggerLevels.DEBUG})
  ],
```

in your service/component:

import { Logger } from './utils/logger';

...

```typescript
constructor(private logger: Logger) {
    this.logger.debug('message with additional object', { hi: 'text' });
    this.logger.info('just message');
    this.logger.warn('message and array', ['a', 'b']);
    this.logger.error('message and integer', 1);
}
```

## Further improvements can be added:

- More config options
- Send log to server