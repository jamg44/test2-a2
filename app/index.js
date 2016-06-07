System.registerDynamic("app/environment.js",[],!0,function(a,b,c){"use strict";return b.environment={production:!0},c.exports}),System.registerDynamic("app/+hero/hero.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-hero",templateUrl:"hero.component.html",styleUrls:["hero.component.css"]}),e("design:paramtypes",[])],a)}();return b.HeroComponent=g,c.exports}),System.registerDynamic("app/+hero/index.js",["./hero.component"],!0,function(a,b,c){"use strict";var d=a("./hero.component");return b.HeroComponent=d.HeroComponent,c.exports}),System.registerDynamic("app/batman/batman.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-batman",templateUrl:"batman.component.html",styleUrls:["batman.component.css"]}),e("design:paramtypes",[])],a)}();return b.BatmanComponent=g,c.exports}),System.registerDynamic("app/batman/index.js",["./batman.component"],!0,function(a,b,c){"use strict";var d=a("./batman.component");return b.BatmanComponent=d.BatmanComponent,c.exports}),System.registerDynamic("app/users/users.component.js",["@angular/core"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=function(){function a(){}return a.prototype.ngOnInit=function(){},a=d([f.Component({moduleId:c.id,selector:"app-users",templateUrl:"users.component.html",styleUrls:["users.component.css"]}),e("design:paramtypes",[])],a)}();return b.UsersComponent=g,c.exports}),System.registerDynamic("app/users/index.js",["./users.component"],!0,function(a,b,c){"use strict";var d=a("./users.component");return b.UsersComponent=d.UsersComponent,c.exports}),System.registerDynamic("app/test2-a2.component.js",["@angular/core","./+hero","@angular/router","./batman","./users"],!0,function(a,b,c){"use strict";var d=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=3>f?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(3>f?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},e=this&&this.__metadata||function(a,b){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(a,b):void 0},f=a("@angular/core"),g=a("./+hero"),h=a("@angular/router"),i=a("./batman"),j=a("./users"),k=function(){function a(){this.title="test2-a2 works!"}return a=d([f.Component({moduleId:c.id,selector:"test2-a2-app",templateUrl:"test2-a2.component.html",styleUrls:["test2-a2.component.css"],directives:[h.ROUTER_DIRECTIVES,j.UsersComponent],providers:[h.ROUTER_PROVIDERS]}),h.Routes([{path:"/hero",component:g.HeroComponent},{path:"/batman",component:i.BatmanComponent}]),e("design:paramtypes",[])],a)}();return b.Test2A2AppComponent=k,c.exports}),System.registerDynamic("app/index.js",["./environment","./test2-a2.component"],!0,function(a,b,c){"use strict";function d(a){for(var c in a)b.hasOwnProperty(c)||(b[c]=a[c])}return d(a("./environment")),d(a("./test2-a2.component")),c.exports});