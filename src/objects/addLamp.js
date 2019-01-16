function addLamp() {

    lamp = new THREE.Group();


    var fbxloader = new THREE.FBXLoader();
animationMixer = null;

    fbxloader.load('src/models/lamp_neueAnimation.fbx', function(object) {
        lamp.add(object);

	

	for (var i = 0; i < object.animations.length; i++) {
		 console.log(object.animations[i].name);
	}
	
	
	
	
		animationMixer = new THREE.AnimationMixer(object);
		for(var i = 0; i < object.animations.length; i++) {
			var action = animationMixer.clipAction(object.animations[i]);
			action.clampWhenFinished = false;
			action.setLoop(THREE.LoopOnce);
		}

		
        object.traverse(function(child) {
            if (child.isMesh) {
				
				
                child.material.side = THREE.DoubleSide;
                child.castShadow = true;
            }
        });
	});

	
	// if (animationMixer != null)	{			//funktioniert soweit nicht
		//		animationMixer.update(delta); }
	
	lamp.position.set(-27, 73, 0);
   

    scene.add(lamp);

	physics.addCylinder( lamp,  20, 11, 13, true, 1); 		
}
