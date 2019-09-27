// Path Animator v1.5.0
// (c) 2013 Yair Even Or (https://github.com/yairEO/pathAnimator)
// MIT-style license.

function PathAnimator( path, settings ){
    if( !path ) return;

    this.len = this.updatePath( path );
    this.timer = null;

    this.settings = {
        duration     : settings.duration,
        step         : settings.step,
        reverse      : !!settings.reverse,
        startPercent : settings.startPercent || 0,
        onDone       : settings.onDone || function(){},
        easing       : settings.easing,
        fps          : 1000/60, // frames-per-second
    }
}

PathAnimator.prototype = {
    start : function( startFromPercent, stopAtPercent ){
        this.stop();
        startFromPercent = startFromPercent || this.settings.startPercent || 0;
        this.percent = startFromPercent;
        if( this.settings.duration == 0 ) return false;

        var that = this,
            startTime = new Date(),
            stopAtPercent = stopAtPercent || 100;

        (function calc(){
            var p       = [], angle,
                now     = new Date(),
                elapsed = (now-startTime)/1000,
                t       = (elapsed/that.settings.duration),
                newPercent;

            // easing functions: https://gist.github.com/gre/1650294
            if( typeof that.settings.easing == 'function' ){
                t = that.settings.easing(t);
            }

            newPercent = startFromPercent + t * (stopAtPercent - startFromPercent);

            if( that.settings.reverse ){
                newPercent = startFromPercent - t * (stopAtPercent - startFromPercent)
                if( newPercent < 0 )
                    newPercent = stopAtPercent + newPercent;
            }

            that.running = true;
            that.percent = newPercent;

            // On animation end (from '0%' to '100%' or '100%' to '0%')
            if( t > 0.999 ){
                that.stop();
                that.percent = stopAtPercent;
                return that.settings.onDone();
            }

            //  angle calculations
            p[0] = that.pointAt( that.percent - 1 );
            p[1] = that.pointAt( that.percent + 1 );
            angle = Math.atan2(p[1].y-p[0].y,p[1].x-p[0].x)*180 / Math.PI;

            // advance to the next point on the path
            that.timer = setTimeout( calc, that.settings.fps );
            // do one step ("frame")
            that.settings.step( that.pointAt(that.percent), angle );
        })();
    },

    stop : function(){
        clearTimeout( this.timer );
        this.timer = null;
        this.running = false;
    },

    stopAt : function(percent){

    },

    pointAt : function(percent){
        return this.path.getPointAtLength( this.len * percent/100 );
    },

    updatePath : function( path ){
        if( !this.path && path ){
            this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            this.path.setAttribute('d', path);
        }
        return this.path.getTotalLength();
    }
};

// (function launchesRocket() {
//     var path = 'M481.328713,8648 C518.732103,8648.87325 545.736359,8651.72665 562.341483,8656.56022 C622.367793,8674.03321 650,8727.76648 650,8773.66028 C650,8831.9409 612.159181,8876.47618 534.150166,8934.8659 C446.623194,9000.3798 332.785118,9041.42904 259.552984,9027.855 C219.148838,9020.36584 186,8986.90463 186,8940.87356 C186,8895.00137 221.166032,8857.78454 264.950327,8852.96245 C282.518526,8851.02761 302.053447,8854.86585 319.452252,8865.14779 C347.352846,8881.63583 358.846341,8906.45718 441.570203,8956.91391 C495.954333,8990.08505 566.731874,9021.59499 667.378705,9035.45173 C686.953722,9038.14676 711.160821,9039.66285 740,9040';
//     var animateRocket = new PathAnimator( path, {
//         duration : 30,
//         reverse  : false,
//     });
//     animateRocket().start();
// // })();