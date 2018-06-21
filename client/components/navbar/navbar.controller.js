'use strict';

class NavbarController {
  //start-non-standard
  menu = [{

    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard


}

angular.module('pruebaSaintApp')
  .controller('NavbarController', NavbarController);
