/********************************************************
 * Twigloader
 *
 * Loads basic templates and provides
 * render() to load new templates on the fly
 ********************************************************/

define(['jquery', 'twig'], function ($, twigEngine) {

  // Place to store all the twig templates.
  var twigTemplates = {};

  return {
    render: function(templateName, render) {
      // Make sure the template is loaded.
      if (!twigTemplates[templateName]) {
        twigTemplates[templateName] = twigEngine.twig({
            id: templateName,
            href: 'templates/' + templateName + '.html',
            async: false
        });
      }

      var renderedEntity = twigTemplates[templateName].render(render);

      return renderedEntity;
    }
  }
});