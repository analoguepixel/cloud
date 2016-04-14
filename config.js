/********************************************************************
 Configuration options

 Exports: namespace object
 ********************************************************************/

exports.port = 8000;

exports.logLevel = 'dev';

exports.sessionSecret = 'bunnyslippers';

exports.rootUrl   = '/lesae';
exports.userUrl   = '/user';

// TODO: DO NOT STORE PASSWORDS
exports.users =
  {jryan: {name: 'Jack Ryan',
           password: 'secret'}
  };
