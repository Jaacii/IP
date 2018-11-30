// External Libraries
document.write('<script type="text/javascript" src="../lib/three.js-master/build/three.js"></script>');
document.write('<script type="text/javascript" src="../lib/dat.gui-master/build/dat.gui.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-master/examples/js/controls/OrbitControls.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-master/examples/js/libs/tween.min.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-master/examples/js/libs/inflate.min.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-master/examples/js/libs/stats.min.js"></script>');
document.write('<script type="text/javascript" src="../lib/three.js-master/examples/js/loaders/FBXLoader_r90.js"></script>');
document.write('<script type="text/javascript" src="../lib/ThreeCSG-master_oldVersion/ThreeCSG.js"></script>');
document.write('<script type="text/javascript" src="../lib/cannon.js-master/build/cannon.js"></script>');
document.write('<script type="text/javascript" src="../lib/howler.js-master/src/howler.core.js"></script>');

// Own Code




function main() {

	scene = new THREE.Scene();

    physics = new Physics();
    physics.initialize(0, -200, 0, 1/120, true);

    var axes = new THREE.AxesHelper(20);
	//objects blender



}