/********************************************************
 * App
 *
 * Triggers various inits.
 ********************************************************/

define(['map', 'popup'], function (mapFabric, popupFabric) {
  mapFabric.init();

  var popup1 = {
    title: 'Information',
    icon: 'bullhorn',
    actions: {
      'favorite': {
        icon: 'star'
      },
      'note': {
        icon: 'pencil'
      }
    },
    classes: ['information'],
    description: 'Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu. Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu.'
  };

  var popup2 = {
    title: 'Information',
    fullscreen: true,
    icon: 'bullhorn',
    actions: {
      'favorite': {
        icon: 'star'
      },
      'note': {
        icon: 'pencil'
      }
    },
    classes: ['information'],
    description: 'Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu. Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu.'
  };

  var popup3 = {
    title: 'Information',
    fullscreen: true,
    icon: 'bullhorn',
    classes: ['information'],
    description: 'Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu. Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu.'
  };

  var popup4 = {
    title: 'Information',
    icon: 'bullhorn',
    classes: ['information'],
    description: 'Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu. Proin consequat mattis ipsum, eu euismod orci fringilla id. Nullam in sem est, non laoreet eros. Aenean id lacus in orci elementum vulputate in a ligula. Etiam cursus magna et lacus volutpat nec luctus neque vehicula. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dui velit, lacinia vel adipiscing eu, blandit ut nisi. Quisque aliquam iaculis iaculis. Nulla consequat, justo et rutrum vulputate, erat est lacinia neque, eu semper elit metus ut neque. Duis ac neque sit amet augue molestie pellentesque. Duis et sem vel lorem placerat pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eu orci quam, ut ultricies ante. Mauris tortor quam, vehicula vitae aliquam quis, vestibulum sit amet nisi. Aenean et ipsum id sem egestas pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet imperdiet nisl. Suspendisse purus quam, commodo non commodo et, suscipit id enim. Aenean vulputate mattis nisl in hendrerit. Fusce eleifend facilisis viverra. In dignissim, velit quis interdum sodales, nibh purus interdum ante, nec sodales augue augue aliquam arcu.'
  };

  popupFabric.open(popup1);
});