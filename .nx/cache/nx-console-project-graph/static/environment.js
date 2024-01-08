window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    workspaces: [
      {
        id: 'local',
        label: 'local',
        projectGraphUrl: 'project-graph.json',
        taskGraphUrl: 'task-graph.json'
      }
    ],
    defaultWorkspaceId: 'local',
  };
  window.projectGraphResponse = {"hash":"2cc8e8bda15ba78529920d3f63697f84fc833f94717a663dfbf542a9d5ffba2c","projects":[{"name":"shared-environments","type":"lib","data":{"name":"shared-environments","$schema":"../../../node_modules/nx/schemas/project-schema.json","sourceRoot":"libs/shared/environments/src","prefix":"deb-gpt","tags":["scope:shared","type:environments"],"projectType":"library","targets":{"test":{"inputs":["default","^production","{workspaceRoot}/jest.preset.js"],"executor":"@nx/jest:jest","outputs":["{workspaceRoot}/coverage/{projectRoot}"],"options":{"jestConfig":"libs/shared/environments/jest.config.ts","passWithNoTests":true},"configurations":{"ci":{"ci":true,"codeCoverage":true}}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json","{workspaceRoot}/.eslintignore"],"executor":"@nx/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["libs/shared/environments/**/*.ts","libs/shared/environments/**/*.html"]},"configurations":{}}},"root":"libs/shared/environments","implicitDependencies":[]}},{"name":"deb-gpt-e2e","type":"e2e","data":{"name":"deb-gpt-e2e","$schema":"../../node_modules/nx/schemas/project-schema.json","sourceRoot":"apps/deb-gpt-e2e/src","projectType":"application","targets":{"e2e":{"inputs":["default","^production"],"executor":"@nx/cypress:cypress","options":{"cypressConfig":"apps/deb-gpt-e2e/cypress.config.ts","devServerTarget":"deb-gpt:serve:development","testingType":"e2e"},"configurations":{"production":{"devServerTarget":"deb-gpt:serve:production"},"ci":{"devServerTarget":"deb-gpt:serve-static"}}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json","{workspaceRoot}/.eslintignore"],"executor":"@nx/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/deb-gpt-e2e/**/*.{js,ts}"]},"configurations":{}}},"tags":[],"implicitDependencies":["deb-gpt"],"root":"apps/deb-gpt-e2e"}},{"name":"deb-gpt","type":"app","data":{"name":"deb-gpt","$schema":"../../node_modules/nx/schemas/project-schema.json","projectType":"application","prefix":"deb-gpt","sourceRoot":"apps/deb-gpt/src","tags":[],"targets":{"build":{"dependsOn":["^build"],"inputs":["production","^production"],"executor":"@angular-devkit/build-angular:browser","outputs":["{options.outputPath}"],"options":{"outputPath":"dist/apps/deb-gpt","index":"apps/deb-gpt/src/index.html","main":"apps/deb-gpt/src/main.ts","polyfills":["zone.js"],"tsConfig":"apps/deb-gpt/tsconfig.app.json","assets":["apps/deb-gpt/src/favicon.ico","apps/deb-gpt/src/assets"],"styles":["apps/deb-gpt/src/styles.scss","node_modules/primeng/resources/themes/lara-light-blue/theme.css","node_modules/primeng/resources/primeng.min.css"],"scripts":[]},"configurations":{"production":{"budgets":[{"type":"initial","maximumWarning":"500kb","maximumError":"1mb"},{"type":"anyComponentStyle","maximumWarning":"2kb","maximumError":"4kb"}],"outputHashing":"all","fileReplacements":[{"replace":"libs/shared/environments/src/lib/environment.ts","with":"libs/shared/environments/src/lib/environment.production.ts"}]},"development":{"buildOptimizer":false,"optimization":false,"vendorChunk":true,"extractLicenses":false,"sourceMap":true,"namedChunks":true,"fileReplacements":[{"replace":"libs/shared/environments/src/lib/environment.ts","with":"libs/shared/environments/src/lib/environment.ts"}]}},"defaultConfiguration":"production"},"serve":{"executor":"@angular-devkit/build-angular:dev-server","configurations":{"production":{"browserTarget":"deb-gpt:build:production"},"development":{"browserTarget":"deb-gpt:build:development"}},"defaultConfiguration":"development"},"extract-i18n":{"executor":"@angular-devkit/build-angular:extract-i18n","options":{"browserTarget":"deb-gpt:build"}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json","{workspaceRoot}/.eslintignore"],"executor":"@nx/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["apps/deb-gpt/**/*.ts","apps/deb-gpt/**/*.html"]},"configurations":{}},"test":{"inputs":["default","^production","{workspaceRoot}/jest.preset.js"],"executor":"@nx/jest:jest","outputs":["{workspaceRoot}/coverage/{projectRoot}"],"options":{"jestConfig":"apps/deb-gpt/jest.config.ts","passWithNoTests":true},"configurations":{"ci":{"ci":true,"codeCoverage":true}}},"serve-static":{"executor":"@nx/web:file-server","options":{"buildTarget":"deb-gpt:build"}}},"root":"apps/deb-gpt","implicitDependencies":[]}},{"name":"auth","type":"lib","data":{"name":"auth","$schema":"../../node_modules/nx/schemas/project-schema.json","sourceRoot":"libs/auth/src","prefix":"deb-gpt","tags":[],"projectType":"library","targets":{"test":{"inputs":["default","^production","{workspaceRoot}/jest.preset.js"],"executor":"@nx/jest:jest","outputs":["{workspaceRoot}/coverage/{projectRoot}"],"options":{"jestConfig":"libs/auth/jest.config.ts","passWithNoTests":true},"configurations":{"ci":{"ci":true,"codeCoverage":true}}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json","{workspaceRoot}/.eslintignore"],"executor":"@nx/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["libs/auth/**/*.ts","libs/auth/**/*.html"]},"configurations":{}}},"root":"libs/auth","implicitDependencies":[]}},{"name":"core","type":"lib","data":{"name":"core","$schema":"../../node_modules/nx/schemas/project-schema.json","sourceRoot":"libs/core/src","prefix":"deb-gpt","tags":[],"projectType":"library","targets":{"test":{"inputs":["default","^production","{workspaceRoot}/jest.preset.js"],"executor":"@nx/jest:jest","outputs":["{workspaceRoot}/coverage/{projectRoot}"],"options":{"jestConfig":"libs/core/jest.config.ts","passWithNoTests":true},"configurations":{"ci":{"ci":true,"codeCoverage":true}}},"lint":{"inputs":["default","{workspaceRoot}/.eslintrc.json","{workspaceRoot}/.eslintignore"],"executor":"@nx/linter:eslint","outputs":["{options.outputFile}"],"options":{"lintFilePatterns":["libs/core/**/*.ts","libs/core/**/*.html"]},"configurations":{}}},"root":"libs/core","implicitDependencies":[]}}],"dependencies":{"shared-environments":[],"deb-gpt-e2e":[{"source":"deb-gpt-e2e","target":"deb-gpt","type":"implicit"}],"deb-gpt":[{"source":"deb-gpt","target":"core","type":"dynamic"},{"source":"deb-gpt","target":"shared-environments","type":"static"}],"auth":[],"core":[{"source":"core","target":"shared-environments","type":"static"}]},"fileMap":{"shared-environments":[{"file":"libs/shared/environments/.DS_Store","hash":"8665596188743970574"},{"file":"libs/shared/environments/.eslintrc.json","hash":"9439656868288842277"},{"file":"libs/shared/environments/README.md","hash":"2281358417133866325"},{"file":"libs/shared/environments/jest.config.ts","hash":"7102285622185599055"},{"file":"libs/shared/environments/project.json","hash":"17293839665924503623"},{"file":"libs/shared/environments/src/.DS_Store","hash":"17080971488566448850"},{"file":"libs/shared/environments/src/index.ts","hash":"17629727789544416765"},{"file":"libs/shared/environments/src/lib/environment.development.ts","hash":"1655714181481801424"},{"file":"libs/shared/environments/src/lib/environment.production.ts","hash":"863771683337046340"},{"file":"libs/shared/environments/src/lib/environment.ts","hash":"863771683337046340"},{"file":"libs/shared/environments/src/test-setup.ts","hash":"12935735732682149507","deps":["npm:jest-preset-angular/setup-jest"]},{"file":"libs/shared/environments/tsconfig.json","hash":"8526453262384300416"},{"file":"libs/shared/environments/tsconfig.lib.json","hash":"6020606002228403423"},{"file":"libs/shared/environments/tsconfig.spec.json","hash":"7159729809249402441"}],"deb-gpt-e2e":[{"file":"apps/deb-gpt-e2e/.eslintrc.json","hash":"14060216369337943343"},{"file":"apps/deb-gpt-e2e/cypress.config.ts","hash":"15414076024138857470","deps":["npm:cypress","npm:@nx/cypress/plugins/cypress-preset"]},{"file":"apps/deb-gpt-e2e/project.json","hash":"13879009160197094801"},{"file":"apps/deb-gpt-e2e/src/e2e/app.cy.ts","hash":"9727933466705539977"},{"file":"apps/deb-gpt-e2e/src/fixtures/example.json","hash":"11614668686582597233"},{"file":"apps/deb-gpt-e2e/src/support/app.po.ts","hash":"11157016311132186162"},{"file":"apps/deb-gpt-e2e/src/support/commands.ts","hash":"7314691991044890572"},{"file":"apps/deb-gpt-e2e/src/support/e2e.ts","hash":"3666078656922506009"},{"file":"apps/deb-gpt-e2e/tsconfig.json","hash":"15439127571515986436"}],"auth":[{"file":"libs/auth/.eslintrc.json","hash":"2704343837372904634"},{"file":"libs/auth/README.md","hash":"9370648284768385907"},{"file":"libs/auth/jest.config.ts","hash":"10329585455780868632"},{"file":"libs/auth/project.json","hash":"15495216876342446471"},{"file":"libs/auth/src/index.ts","hash":"16079796332926691753"},{"file":"libs/auth/src/lib/auth.module.ts","hash":"6654952197629741153","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/router"]},{"file":"libs/auth/src/lib/lib.routes.ts","hash":"14108664026072370828","deps":["npm:@angular/router"]},{"file":"libs/auth/src/test-setup.ts","hash":"12935735732682149507","deps":["npm:jest-preset-angular"]},{"file":"libs/auth/tsconfig.json","hash":"15487755565970508470"},{"file":"libs/auth/tsconfig.lib.json","hash":"5796668385415907511"},{"file":"libs/auth/tsconfig.spec.json","hash":"2927375835638640771"}],"core":[{"file":"libs/core/.DS_Store","hash":"11261875459895462258"},{"file":"libs/core/.eslintrc.json","hash":"2704343837372904634"},{"file":"libs/core/README.md","hash":"9810432091555253122"},{"file":"libs/core/jest.config.ts","hash":"6304570801630908294"},{"file":"libs/core/project.json","hash":"12868868696035110357"},{"file":"libs/core/src/.DS_Store","hash":"9846260213391554483"},{"file":"libs/core/src/index.ts","hash":"8768726660557828762"},{"file":"libs/core/src/lib/.DS_Store","hash":"13201482375952137703"},{"file":"libs/core/src/lib/core.module.ts","hash":"7813584032368521550","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/router","npm:primeng/button","npm:primeng/inputtext","npm:@angular/common/http","npm:ngx-markdown","npm:@angular/forms","npm:prismjs","npm:prismjs/components/prism-typescript.min.js","npm:prismjs/plugins/line-numbers/prism-line-numbers.js","npm:prismjs/plugins/line-highlight/prism-line-highlight.js","npm:@angular/platform-browser"]},{"file":"libs/core/src/lib/gpt-base/gpt-base.component.html","hash":"5840461362481406985"},{"file":"libs/core/src/lib/gpt-base/gpt-base.component.scss","hash":"2561571128161845328"},{"file":"libs/core/src/lib/gpt-base/gpt-base.component.spec.ts","hash":"13228679835906888256","deps":["npm:@angular/core/testing"]},{"file":"libs/core/src/lib/gpt-base/gpt-base.component.ts","hash":"10565466284643991511","deps":["npm:@angular/core","shared-environments","npm:rxjs","npm:@angular/common/http"]},{"file":"libs/core/src/lib/gpt.service.spec.ts","hash":"3153143675297921412","deps":["npm:@angular/core/testing"]},{"file":"libs/core/src/lib/gpt.service.ts","hash":"10547836864341615696","deps":["npm:@angular/common/http","npm:@angular/core"]},{"file":"libs/core/src/lib/gptservice.service.spec.ts","hash":"10096002044385530866","deps":["npm:@angular/core/testing"]},{"file":"libs/core/src/lib/gptservice.service.ts","hash":"1565505234004470230","deps":["npm:@angular/common/http","npm:@angular/core","shared-environments","npm:rxjs"]},{"file":"libs/core/src/lib/header/header.component.html","hash":"14545267829849115089"},{"file":"libs/core/src/lib/header/header.component.scss","hash":"16921922399207641945"},{"file":"libs/core/src/lib/header/header.component.spec.ts","hash":"4499384199601543057","deps":["npm:@angular/core/testing"]},{"file":"libs/core/src/lib/header/header.component.ts","hash":"17002316880111938445","deps":["npm:@angular/core","npm:@angular/common"]},{"file":"libs/core/src/lib/layout/layout.component.html","hash":"14936024706467801014"},{"file":"libs/core/src/lib/layout/layout.component.scss","hash":"4055606894390288348"},{"file":"libs/core/src/lib/layout/layout.component.spec.ts","hash":"16746658341974471984","deps":["npm:@angular/core/testing"]},{"file":"libs/core/src/lib/layout/layout.component.ts","hash":"2378286592683642957","deps":["npm:@angular/core"]},{"file":"libs/core/src/lib/lib.routes.ts","hash":"1825911821681640523","deps":["npm:@angular/router"]},{"file":"libs/core/src/lib/models/gpt.model.ts","hash":"12417219259685458840"},{"file":"libs/core/src/lib/typewriting.directive.spec.ts","hash":"14133067526568450024"},{"file":"libs/core/src/lib/typewriting.directive.ts","hash":"1566056780635518602","deps":["npm:@angular/core"]},{"file":"libs/core/src/test-setup.ts","hash":"12935735732682149507","deps":["npm:jest-preset-angular/setup-jest"]},{"file":"libs/core/tsconfig.json","hash":"17231641087497807210"},{"file":"libs/core/tsconfig.lib.json","hash":"5796668385415907511"},{"file":"libs/core/tsconfig.spec.json","hash":"2927375835638640771"}],"deb-gpt":[{"file":"apps/deb-gpt/.eslintrc.json","hash":"2704343837372904634"},{"file":"apps/deb-gpt/jest.config.ts","hash":"11109786449658412286"},{"file":"apps/deb-gpt/project.json","hash":"4965753220375490072"},{"file":"apps/deb-gpt/src/app/app.component.html","hash":"13619156289127694917"},{"file":"apps/deb-gpt/src/app/app.component.scss","hash":"3244421341483603138"},{"file":"apps/deb-gpt/src/app/app.component.spec.ts","hash":"2333544439151051488","deps":["npm:@angular/core/testing","npm:@angular/router/testing"]},{"file":"apps/deb-gpt/src/app/app.component.ts","hash":"3923667514016304750","deps":["npm:@angular/core"]},{"file":"apps/deb-gpt/src/app/app.module.ts","hash":"13625434694031141281","deps":["npm:@angular/core","npm:@angular/platform-browser","npm:@angular/router","npm:@angular/common","npm:@ng-bootstrap/ng-bootstrap","npm:@angular/common/http"]},{"file":"apps/deb-gpt/src/app/app.routes.ts","hash":"2511939899034663974","deps":["npm:@angular/router",["core","dynamic"]]},{"file":"apps/deb-gpt/src/app/auth-http.interceptor.spec.ts","hash":"4399232746553572543","deps":["npm:@angular/core/testing"]},{"file":"apps/deb-gpt/src/app/auth-http.interceptor.ts","hash":"16174098737379958417","deps":["npm:@angular/core","npm:@angular/common/http","npm:rxjs"]},{"file":"apps/deb-gpt/src/assets/.gitkeep","hash":"3244421341483603138"},{"file":"apps/deb-gpt/src/favicon.ico","hash":"9303420814833116677"},{"file":"apps/deb-gpt/src/index.html","hash":"9282751615080088002"},{"file":"apps/deb-gpt/src/main.ts","hash":"6452712741106246079","deps":["npm:@angular/platform-browser-dynamic","shared-environments"]},{"file":"apps/deb-gpt/src/styles.scss","hash":"8339897773374192676"},{"file":"apps/deb-gpt/src/test-setup.ts","hash":"12935735732682149507","deps":["npm:jest-preset-angular/setup-jest"]},{"file":"apps/deb-gpt/tsconfig.app.json","hash":"16963222746182541657"},{"file":"apps/deb-gpt/tsconfig.editor.json","hash":"17511610827034788226"},{"file":"apps/deb-gpt/tsconfig.json","hash":"12094030803572703611"},{"file":"apps/deb-gpt/tsconfig.spec.json","hash":"2927375835638640771"}]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};
    window.taskGraphResponse = {"taskGraphs":{"shared-environments:test":{"roots":["shared-environments:test"],"tasks":{"shared-environments:test":{"id":"shared-environments:test","target":{"project":"shared-environments","target":"test"},"projectRoot":"libs/shared/environments","overrides":{}}},"dependencies":{"shared-environments:test":[]}},"shared-environments:test:ci":{"roots":["shared-environments:test:ci"],"tasks":{"shared-environments:test:ci":{"id":"shared-environments:test:ci","target":{"project":"shared-environments","target":"test","configuration":"ci"},"projectRoot":"libs/shared/environments","overrides":{}}},"dependencies":{"shared-environments:test:ci":[]}},"shared-environments:lint":{"roots":["shared-environments:lint"],"tasks":{"shared-environments:lint":{"id":"shared-environments:lint","target":{"project":"shared-environments","target":"lint"},"projectRoot":"libs/shared/environments","overrides":{}}},"dependencies":{"shared-environments:lint":[]}},"deb-gpt-e2e:e2e":{"roots":["deb-gpt-e2e:e2e"],"tasks":{"deb-gpt-e2e:e2e":{"id":"deb-gpt-e2e:e2e","target":{"project":"deb-gpt-e2e","target":"e2e"},"projectRoot":"apps/deb-gpt-e2e","overrides":{}}},"dependencies":{"deb-gpt-e2e:e2e":[]}},"deb-gpt-e2e:e2e:production":{"roots":["deb-gpt-e2e:e2e:production"],"tasks":{"deb-gpt-e2e:e2e:production":{"id":"deb-gpt-e2e:e2e:production","target":{"project":"deb-gpt-e2e","target":"e2e","configuration":"production"},"projectRoot":"apps/deb-gpt-e2e","overrides":{}}},"dependencies":{"deb-gpt-e2e:e2e:production":[]}},"deb-gpt-e2e:e2e:ci":{"roots":["deb-gpt-e2e:e2e:ci"],"tasks":{"deb-gpt-e2e:e2e:ci":{"id":"deb-gpt-e2e:e2e:ci","target":{"project":"deb-gpt-e2e","target":"e2e","configuration":"ci"},"projectRoot":"apps/deb-gpt-e2e","overrides":{}}},"dependencies":{"deb-gpt-e2e:e2e:ci":[]}},"deb-gpt-e2e:lint":{"roots":["deb-gpt-e2e:lint"],"tasks":{"deb-gpt-e2e:lint":{"id":"deb-gpt-e2e:lint","target":{"project":"deb-gpt-e2e","target":"lint"},"projectRoot":"apps/deb-gpt-e2e","overrides":{}}},"dependencies":{"deb-gpt-e2e:lint":[]}},"deb-gpt:build":{"roots":["deb-gpt:build:production"],"tasks":{"deb-gpt:build:production":{"id":"deb-gpt:build:production","target":{"project":"deb-gpt","target":"build","configuration":"production"},"projectRoot":"apps/deb-gpt","overrides":{}}},"dependencies":{"deb-gpt:build:production":[]}},"deb-gpt:build:production":{"roots":["deb-gpt:build:production"],"tasks":{"deb-gpt:build:production":{"id":"deb-gpt:build:production","target":{"project":"deb-gpt","target":"build","configuration":"production"},"projectRoot":"apps/deb-gpt","overrides":{}}},"dependencies":{"deb-gpt:build:production":[]}},"deb-gpt:build:development":{"roots":["deb-gpt:build:development"],"tasks":{"deb-gpt:build:development":{"id":"deb-gpt:build:development","target":{"project":"deb-gpt","target":"build","configuration":"development"},"projectRoot":"apps/deb-gpt","overrides":{}}},"dependencies":{"deb-gpt:build:development":[]}},"deb-gpt:serve":{"roots":["deb-gpt:serve:development"],"tasks":{"deb-gpt:serve:development":{"id":"deb-gpt:serve:development","target":{"project":"deb-gpt","target":"serve","configuration":"development"},"projectRoot":"apps/deb-gpt","overrides":{}}},"dependencies":{"deb-gpt:serve:development":[]}},"deb-gpt:serve:production":{"roots":["deb-gpt:serve:production"],"tasks":{"deb-gpt:serve:production":{"id":"deb-gpt:serve:production","target":{"project":"deb-gpt","target":"serve","configuration":"production"},"projectRoot":"apps/deb-gpt","overrides":{}}},"dependencies":{"deb-gpt:serve:production":[]}},"deb-gpt:serve:development":{"roots":["deb-gpt:serve:development"],"tasks":{"deb-gpt:serve:development":{"id":"deb-gpt:serve:development","target":{"project":"deb-gpt","target":"serve","configuration":"development"},"projectRoot":"apps/deb-gpt","overrides":{}}},"dependencies":{"deb-gpt:serve:development":[]}},"deb-gpt:extract-i18n":{"roots":["deb-gpt:extract-i18n"],"tasks":{"deb-gpt:extract-i18n":{"id":"deb-gpt:extract-i18n","target":{"project":"deb-gpt","target":"extract-i18n"},"projectRoot":"apps/deb-gpt","overrides":{}}},"dependencies":{"deb-gpt:extract-i18n":[]}},"deb-gpt:lint":{"roots":["deb-gpt:lint"],"tasks":{"deb-gpt:lint":{"id":"deb-gpt:lint","target":{"project":"deb-gpt","target":"lint"},"projectRoot":"apps/deb-gpt","overrides":{}}},"dependencies":{"deb-gpt:lint":[]}},"deb-gpt:test":{"roots":["deb-gpt:test"],"tasks":{"deb-gpt:test":{"id":"deb-gpt:test","target":{"project":"deb-gpt","target":"test"},"projectRoot":"apps/deb-gpt","overrides":{}}},"dependencies":{"deb-gpt:test":[]}},"deb-gpt:test:ci":{"roots":["deb-gpt:test:ci"],"tasks":{"deb-gpt:test:ci":{"id":"deb-gpt:test:ci","target":{"project":"deb-gpt","target":"test","configuration":"ci"},"projectRoot":"apps/deb-gpt","overrides":{}}},"dependencies":{"deb-gpt:test:ci":[]}},"deb-gpt:serve-static":{"roots":["deb-gpt:serve-static"],"tasks":{"deb-gpt:serve-static":{"id":"deb-gpt:serve-static","target":{"project":"deb-gpt","target":"serve-static"},"projectRoot":"apps/deb-gpt","overrides":{}}},"dependencies":{"deb-gpt:serve-static":[]}},"auth:test":{"roots":["auth:test"],"tasks":{"auth:test":{"id":"auth:test","target":{"project":"auth","target":"test"},"projectRoot":"libs/auth","overrides":{}}},"dependencies":{"auth:test":[]}},"auth:test:ci":{"roots":["auth:test:ci"],"tasks":{"auth:test:ci":{"id":"auth:test:ci","target":{"project":"auth","target":"test","configuration":"ci"},"projectRoot":"libs/auth","overrides":{}}},"dependencies":{"auth:test:ci":[]}},"auth:lint":{"roots":["auth:lint"],"tasks":{"auth:lint":{"id":"auth:lint","target":{"project":"auth","target":"lint"},"projectRoot":"libs/auth","overrides":{}}},"dependencies":{"auth:lint":[]}},"core:test":{"roots":["core:test"],"tasks":{"core:test":{"id":"core:test","target":{"project":"core","target":"test"},"projectRoot":"libs/core","overrides":{}}},"dependencies":{"core:test":[]}},"core:test:ci":{"roots":["core:test:ci"],"tasks":{"core:test:ci":{"id":"core:test:ci","target":{"project":"core","target":"test","configuration":"ci"},"projectRoot":"libs/core","overrides":{}}},"dependencies":{"core:test:ci":[]}},"core:lint":{"roots":["core:lint"],"tasks":{"core:lint":{"id":"core:lint","target":{"project":"core","target":"lint"},"projectRoot":"libs/core","overrides":{}}},"dependencies":{"core:lint":[]}}},"errors":{}};
    