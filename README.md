### CKEditor5

Adding custom plugins to ckeditor5 is not possible when using the built version. Therefore this package can be used and further expended with other plugins.
At this point, 2 plugins are added besides ckeditor5's default plugins:

- @ckeditor/ckeditor5-alignment
- https://github.com/codana-agency/ckeditor5-video.git (forked and modified from https://github.com/Technologie-Visao/ckeditor5-video)

!!!! ATTENTION !!!!
DO NOT UPGRADE ANY PLUGINS INSIDE PACKAGE.JSON!
The @visao/ckeditor5-video plugin specified in package.json only works together with ckeditor5 version 29.1.0 and also all other used plugins with version 29.1.0.
