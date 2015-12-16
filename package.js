Package.describe({
    'summary': 'Scale effect for s-alert - simple and fancy notifications / alerts for Meteor.',
    'version': '3.1.3',
    'git': 'https://github.com/juliancwirko/meteor-s-alert-scale.git',
    'name': 'juliancwirko:s-alert-scale'
});

Package.onUse(function (api) {
    api.use('juliancwirko:s-alert@3.1.3', ['client']);
    api.imply('juliancwirko:s-alert@3.1.3', ['client']);
    api.addFiles([
        's-alert-scale.css'
    ], 'client');
});
