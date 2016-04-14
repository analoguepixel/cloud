/********************************************************************
 Configuration options

 Exports: namespace object
 ********************************************************************/

exports.port = 8000;

exports.logLevel = 'dev';

exports.sessionSecret = 'bunnyslippers';

exports.rootUrl   = '/lesae';
exports.userUrl   = '/user';

exports.users =
  {gfoust: {name: 'Gabriel Foust',
            password: 'secret'
           },
   john:   {name: 'John Doe',
            password: 'turnip'
           },
   jane:   {name: 'Jane Roe',
            password: 'jingle'
           }
  };