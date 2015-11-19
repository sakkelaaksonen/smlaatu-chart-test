# A Demo app
## Shows amcharts-angular integration and directive scope behaviours

### Start it up
		npm install
		
		bower install

		gulp start server


## Things to do

In amchart-app.js, change the value of tester directive scope
to see how inherited and isolated scopes propagate to the directive


		  return {
        restrict:'EA',
        template:'<div class="test-directive">A:{{values.a||"null"}},B:{{values.b||"null"}}</div>',
         // scope:true,
        scope:{
          values:'='
        },


When scope is isolated, changing controller value wont show in the directive. Giving <tester> an attribute bind,
		
		<tester value="value"></tester> 

will then bind the controller's values variable to the directive at linkage, resulting in ə:1,b:2 instead of template defaults (nulls) 