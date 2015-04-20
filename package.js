Package.describe({
    'summary': 'Scale effect for s-alert - simple and fancy notifications / alerts for Meteor.',
    'version': '1.0.2',
    'git': 'https://github.com/juliancwirko/meteor-s-alert-scale.git',
    'name': 'juliancwirko:s-alert-scale'
});

Package.onUse(function (api) {
    api.use('juliancwirko:s-alert@2.1.0', ['client']);
    api.imply('juliancwirko:s-alert@2.1.0', ['client']);
    api.addFiles([
        's-alert-scale.css'
    ], 'client');
});
