import { Injectable, NgModule } from '@angular/core';

@NgModule()
export class LoggerModule {
    static forRoot(config) {
        return {
            ngModule: LoggerModule,
            providers: [
                { provide: LoggerConfig, useValue: config || {} },
                Logger
            ]
        };
    }
}

export class LoggerConfig {
    level: number;
}

export enum LoggerLevels {
    OFF, DEBUG, INFO, WARN, ERROR
}

@Injectable()
export class Logger {
    level;

    constructor(private config: LoggerConfig) {
        this.level = config.level;
    }

    debug(message, ...additional) {
        this._log(LoggerLevels.DEBUG, 'purple', message, additional);
    }

    info(message, ...additional) {
        this._log(LoggerLevels.INFO, 'dodgerblue', message, additional);
    }

    warn(message, ...additional) {
        this._log(LoggerLevels.WARN, 'orange', message, additional);
    }

    error(message, ...additional) {
        this._log(LoggerLevels.ERROR, 'red', message, additional);
    }

    private _log(level, colour, message, additional) {
        if (this.level === LoggerLevels.OFF || level < this.level) {
            return;
        }
        const date = new Date().toISOString();
        console.log(`%c ${date} [${LoggerLevels[level]}] ${message}`, `color: ${colour}`, ...additional);
    }
}
