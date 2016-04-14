/********************************************************************
 Define routes for FoustDrive

 Exports: router
 ********************************************************************/

var express = require('express'),
    multer  = require('multer'),
    config  = require('../config'),
    generic = require('./controllers/generic');

var router = express.Router();

// Uploads
var upload = multer({ dest: './tmp/' });

router.get('/secret', require('./controllers/secret'));

router.get('/files', require('./controllers/files'));

router.get('/u/', 
            require('./controllers/u'));

router.get('/upload/', 
            require('./controllers/upload'));
router.post('/upload',
            upload.single('myfile'),
            require('./controllers/upload'),
            generic.renderTemplate('upload'));

router.get('/makeDirectory/', 
            require('./controllers/makeDirectory'));
router.post('/makeDirectory',
            upload.single('newDir'),
            require('./controllers/makeDirectory'),
            generic.renderTemplate('makeDirectory'));

router.get('/download', require('./controllers/download'));
router.get('/download/*', require('./controllers/download'));

router.get('/logout', require('./controllers/logout'));

router.get('/404/', 
           generic.renderTemplate('notFound'));

router.use('/files/*', require('./controllers/mapURL'));

// Export
module.exports = router;
