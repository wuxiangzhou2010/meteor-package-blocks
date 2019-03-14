Package.describe({
    name: 'mubiale:blocks',
    summary: 'Provides informations about the current and last 50 blocks',
    version: '1.0.3',
    git: 'http://github.com/wuxiangzhou2010/meteor-package-blocks'
  });
  
  Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.use('underscore', ['client', 'server']);
    api.use('mongo', ['client', 'server']);
  
    // api.use('frozeman:persistent-minimongo@0.1.3', 'client');
    api.use('mubiale:web3@1.0.3', ['client', 'server']);
  
    api.export(['EthBlocks'], ['client', 'server']);
  
    api.addFiles('blocks.js', ['client', 'server']);
  });
  
  // Package.onTest(function(api) {
  //   api.use('tinytest');
  //   api.use('ethereum:blocks');
  //   api.addFiles('blocks-tests.js');
  // });
  
  