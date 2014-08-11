The-Best-JS-Game-Framework
==========================

This is the best javascript game framework on the earth.



--------------------------
## Why is it the best?
...

呃... 我的英文也只能装逼到这里了, 下面还是用中文吧

* 足够简单，特别适合开发微信上到处疯传的那种轻量级小游戏
* 极易扩展和重写
* Duck-Type First
* 尊重每一位开发者自己的习惯, 只提供真正的"框架", 而不是试图"绑架"开发者
* 不做没有必要的封装
    * 例如2D渲染部分.我一直不理解那些试图封装 canvas 2D API的做法.它已经足够简单实用了，封装的意义除了向开发者输出引擎/框架作者自己的价值观之外，意义何在呢? 把context交给开发者自己不好吗?


## 这个项目只是一个恶搞吧?
...

熟悉前端开发的朋友应该听说过 [vanilla-js](http://vanilla-js.com/) 这个东西.
它本身最大的意义就在于宣扬了一种前端开发的哲学和理念(暂且不管这个哲学和理念是不是好).

很多朋友看到我这个东西也会有类似的疑问:

>尼玛, 你这个分明就什么都没做啊? 我能写个更简单灵活的:`setInterval(function(){  /* TODO sth.*/  },1000/FPS);` ... 你是在搞笑吧?

其实如果你这么觉得也没有错.我也是在通过这个项目来表达一种我自己这几年来体会到的 HTML5 2D 游戏开发的哲学和理念(暂且不管这个哲学和理念是不是好).

我也在用这个理念做出了一点点东西.
部分视频:

* Deviant Steel

http://v.youku.com/v_show/id_XNzUwNjc2Nzgw.html


* Beside You

http://v.youku.com/v_show/id_XNjg2OTIzNTc2.html


* COC-like

http://v.youku.com/v_show/id_XNzU0MjQ0OTky.html


* Tiny Wings

http://v.youku.com/v_show/id_XNDMyMTYyOTQ0.html


* Stealth Game

http://v.youku.com/v_show/id_XNDEyMzg5NTUy.html



* Platform Game (游戏片段穿插在视频中)

http://v.youku.com/v_show/id_XNjUxOTAwNDY0.html


...

(还有很多游戏, 就不一一列列出了)

--------------------


当然，这些游戏没有任何一个在商业上取得了成功，甚至商业上的失败也没有取得过，因为根本没有商业化。
那是不是意味着我的这套HTML5游戏开发的哲学和理念没有价值呢？
这个不是我说的算的事情。

总之，HTML5这么简单的东西，我觉得需要的是真正的框架，以及各种开发者自己用着顺手的工具。
而不是一个大包大揽的，绑架开发者的所谓的『引擎』。

上面视频中列举的游戏，确实不是一个这个简单的 Game.js 能搞定的, 它们还用到了这些东西:

```
Animation.js
AStarSearch.js
Camera.js
CollisionUtils.js
DataStore.js
DijkstraSearch.js
EntityTemplate.js
Event.js
EventDispatcher.js
Frame.js
GT-Toucher.js
LinkedList.js
ProcessQ.js
ResourcePool.js
Sound.js
Sprite.js
TileMap.js
TimeQueue.js
Tween.js
... ...
```

但是，这些东西都是彼此独立的，都是和框架无关的。而且开发者可以随意替换成自己用着顺手的类似工具。
而不是『你要是想用我的钳子，必须也买我的锤子』这种霸道的做法。


好了， 先说这些，去吃晚饭了。

（待续...）












