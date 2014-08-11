"use strict";

(function(exports, undefined) {

    var ns = exports.Best = exports.Best || {};
    /***************************/
    /********** Game **********/
    /***************************/

    var Game = ns.Game = function(options) {
        for (var p in options) {
            this[p] = options[p]
        }
    };

    Game.prototype = {
        constructor: Game,
        id: null,
        FPS: 60,
        init: function() {
            var Me = this;
            this._run = function() {
                Me.run();
            };
            this.timer = {
                now: 0,
                last: 0,
                step: Math.round(1000 / this.FPS)
            };
            if (this.onInit) {
                this.onInit.apply(this, arguments);
            }
        },

        start: function() {
            this.timer.now = Date.now();
            this.timer.last = Date.now();
            this.paused = false;
            this.running = true;
            if (this.onStart) {
                this.onStart();
            }
            this.run();
        },
        stop: function() {
            this.running = false;
            if (this.onStop) {
                this.onStop();
            }
        },
        pause: function() {
            this.paused = true;
            if (this.onPause) {
                this.onPause();
            }
        },
        resume: function() {
            this.paused = false;
            if (this.onResume) {
                this.onResume();
            }
        },

        run: function() {
            var now = this.timer.now = Date.now();
            var timeStep = now - this.timer.last;
            this.timer.last = now;
            this.loopId = setTimeout(this._run, this.timer.step);
            this.handleInput(timeStep, now);
            if (!this.paused && timeStep > 1) {
                this.update(timeStep, now);
                this.render(timeStep, now);
            }
            if (!this.running) {
                clearTimeout(this.loopId);
            }
        },

        setScene: function(scene) {
            this.scene = scene;
            scene.enter();
        },

        // implement by yourself
        update: function(timeStep, now) {
            if (this.scene) {
                this.scene.update(timeStep, now);
            }
        },
        // implement by yourself
        render: function(timeStep, now) {
            if (this.scene) {
                this.scene.render(this.context, timeStep, now);
            }
        },
        // implement by yourself
        handleInput: function(timeStep, now) {
            if (this.scene) {
                this.scene.handleInput(timeStep, now);
            }
        },
        // some hooks, implement by yourself
        onInit: null,
        onStart: null,
        onPause: null,
        onResume: null,
        onStop: null,

    };


    /***************************/
    /********** Scene **********/
    /***************************/

    var Scene = ns.Scene = function(options) {
        for (var p in options) {
            this[p] = options[p]
        }
    };

    Scene.prototype = {
        constructor: Scene,
        id: null,
        init: function(game) {

        },
        enter: function() {

        },
        leave: function(nextScene) {

        },
        update: function(timeStep, now) {

        },
        render: function(context, timeStep, now) {

        }
    };

    ns.extend = function(prototype, superclass) {
        var subclass = function(options) {
            for (var p in options) {
                this[p] = options[p];
            }
        };
        var cp = subclass.prototype,
            sp;
        if (superclass) {
            sp = superclass.prototype;
            for (var p in sp) {
                cp[p] = sp[p];
            }
        }
        for (var p in prototype) {
            cp[p] = prototype[p];
        }
        cp.constructor = subclass;
        subclass.$super = sp;
        subclass.superclass = superclass||null;
        subclass.extend = this.extend;
        return subclass;
    }

    function _extend(prototype){
        return ns.extend(prototype,this)
    };

    Game.extend = _extend;
    Scene.extend = _extend;

})(this);


