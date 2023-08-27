var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointSpring' )
  var i595 = data
  i594.spring = i595[0]
  i594.damper = i595[1]
  i594.targetPosition = i595[2]
  return i594
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointMotor' )
  var i597 = data
  i596.m_TargetVelocity = i597[0]
  i596.m_Force = i597[1]
  i596.m_FreeSpin = i597[2]
  return i596
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointLimits' )
  var i599 = data
  i598.m_Min = i599[0]
  i598.m_Max = i599[1]
  i598.m_Bounciness = i599[2]
  i598.m_BounceMinVelocity = i599[3]
  i598.m_ContactDistance = i599[4]
  i598.minBounce = i599[5]
  i598.maxBounce = i599[6]
  return i598
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointDrive' )
  var i601 = data
  i600.m_PositionSpring = i601[0]
  i600.m_PositionDamper = i601[1]
  i600.m_MaximumForce = i601[2]
  return i600
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i603 = data
  i602.m_Spring = i603[0]
  i602.m_Damper = i603[1]
  return i602
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i605 = data
  i604.m_Limit = i605[0]
  i604.m_Bounciness = i605[1]
  i604.m_ContactDistance = i605[2]
  return i604
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i607 = data
  i606.m_ExtremumSlip = i607[0]
  i606.m_ExtremumValue = i607[1]
  i606.m_AsymptoteSlip = i607[2]
  i606.m_AsymptoteValue = i607[3]
  i606.m_Stiffness = i607[4]
  return i606
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i609 = data
  i608.m_LowerAngle = i609[0]
  i608.m_UpperAngle = i609[1]
  return i608
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i611 = data
  i610.m_MotorSpeed = i611[0]
  i610.m_MaximumMotorTorque = i611[1]
  return i610
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i613 = data
  i612.m_DampingRatio = i613[0]
  i612.m_Frequency = i613[1]
  i612.m_Angle = i613[2]
  return i612
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i615 = data
  i614.m_LowerTranslation = i615[0]
  i614.m_UpperTranslation = i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i616 = root || new pc.UnityMaterial()
  var i617 = data
  i616.name = i617[0]
  request.r(i617[1], i617[2], 0, i616, 'shader')
  i616.renderQueue = i617[3]
  i616.enableInstancing = !!i617[4]
  var i619 = i617[5]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i619[i + 0]) );
  }
  i616.floatParameters = i618
  var i621 = i617[6]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i621[i + 0]) );
  }
  i616.colorParameters = i620
  var i623 = i617[7]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i623[i + 0]) );
  }
  i616.vectorParameters = i622
  var i625 = i617[8]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i625[i + 0]) );
  }
  i616.textureParameters = i624
  var i627 = i617[9]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i627[i + 0]) );
  }
  i616.materialFlags = i626
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i631 = data
  i630.name = i631[0]
  i630.value = i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i635 = data
  i634.name = i635[0]
  i634.value = new pc.Color(i635[1], i635[2], i635[3], i635[4])
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = new pc.Vec4( i639[1], i639[2], i639[3], i639[4] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i643 = data
  i642.name = i643[0]
  request.r(i643[1], i643[2], 0, i642, 'value')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i647 = data
  i646.name = i647[0]
  i646.enabled = !!i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i649 = data
  i648.name = i649[0]
  i648.width = i649[1]
  i648.height = i649[2]
  i648.mipmapCount = i649[3]
  i648.anisoLevel = i649[4]
  i648.filterMode = i649[5]
  i648.hdr = !!i649[6]
  i648.format = i649[7]
  i648.wrapMode = i649[8]
  i648.alphaIsTransparency = !!i649[9]
  i648.alphaSource = i649[10]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i651 = data
  i650.position = new pc.Vec3( i651[0], i651[1], i651[2] )
  i650.scale = new pc.Vec3( i651[3], i651[4], i651[5] )
  i650.rotation = new pc.Quat(i651[6], i651[7], i651[8], i651[9])
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i653 = data
  i652.enabled = !!i653[0]
  request.r(i653[1], i653[2], 0, i652, 'sharedMaterial')
  var i655 = i653[3]
  var i654 = []
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 2, i654, '')
  }
  i652.sharedMaterials = i654
  i652.receiveShadows = !!i653[4]
  i652.shadowCastingMode = i653[5]
  i652.sortingLayerID = i653[6]
  i652.sortingOrder = i653[7]
  i652.lightmapIndex = i653[8]
  i652.lightmapSceneIndex = i653[9]
  i652.lightmapScaleOffset = new pc.Vec4( i653[10], i653[11], i653[12], i653[13] )
  i652.lightProbeUsage = i653[14]
  i652.reflectionProbeUsage = i653[15]
  i652.color = new pc.Color(i653[16], i653[17], i653[18], i653[19])
  request.r(i653[20], i653[21], 0, i652, 'sprite')
  i652.flipX = !!i653[22]
  i652.flipY = !!i653[23]
  i652.drawMode = i653[24]
  i652.size = new pc.Vec2( i653[25], i653[26] )
  i652.tileMode = i653[27]
  i652.adaptiveModeThreshold = i653[28]
  i652.maskInteraction = i653[29]
  i652.spriteSortPoint = i653[30]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i659 = data
  i658.radius = i659[0]
  i658.enabled = !!i659[1]
  i658.isTrigger = !!i659[2]
  i658.usedByEffector = !!i659[3]
  i658.density = i659[4]
  i658.offset = new pc.Vec2( i659[5], i659[6] )
  request.r(i659[7], i659[8], 0, i658, 'material')
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i661 = data
  i660.bodyType = i661[0]
  request.r(i661[1], i661[2], 0, i660, 'material')
  i660.simulated = !!i661[3]
  i660.useAutoMass = !!i661[4]
  i660.mass = i661[5]
  i660.drag = i661[6]
  i660.angularDrag = i661[7]
  i660.gravityScale = i661[8]
  i660.collisionDetectionMode = i661[9]
  i660.sleepMode = i661[10]
  i660.constraints = i661[11]
  return i660
}

Deserializers["MetaballParticleClass"] = function (request, data, root) {
  var i662 = root || request.c( 'MetaballParticleClass' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'MObject')
  i662.LifeTime = i663[2]
  request.r(i663[3], i663[4], 0, i662, 'SpawnerParent')
  i662.witinTarget = !!i663[5]
  i662.Editor_Velocity = new pc.Vec2( i663[6], i663[7] )
  i662.Velocity_Limiter_X = new pc.Vec2( i663[8], i663[9] )
  i662.Velocity_Limiter_Y = new pc.Vec2( i663[10], i663[11] )
  i662.ScaleDown = !!i663[12]
  i662.endSize = i663[13]
  i662.BlendingColor = !!i663[14]
  request.r(i663[15], i663[16], 0, i662, 'glowSP')
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i665 = data
  i664.enabled = !!i665[0]
  request.r(i665[1], i665[2], 0, i664, 'sharedMaterial')
  var i667 = i665[3]
  var i666 = []
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 2, i666, '')
  }
  i664.sharedMaterials = i666
  i664.receiveShadows = !!i665[4]
  i664.shadowCastingMode = i665[5]
  i664.sortingLayerID = i665[6]
  i664.sortingOrder = i665[7]
  i664.lightmapIndex = i665[8]
  i664.lightmapSceneIndex = i665[9]
  i664.lightmapScaleOffset = new pc.Vec4( i665[10], i665[11], i665[12], i665[13] )
  i664.lightProbeUsage = i665[14]
  i664.reflectionProbeUsage = i665[15]
  var i669 = i665[16]
  var i668 = []
  for(var i = 0; i < i669.length; i += 3) {
    i668.push( new pc.Vec3( i669[i + 0], i669[i + 1], i669[i + 2] ) );
  }
  i664.positions = i668
  i664.positionCount = i665[17]
  i664.time = i665[18]
  i664.startWidth = i665[19]
  i664.endWidth = i665[20]
  i664.widthMultiplier = i665[21]
  i664.autodestruct = !!i665[22]
  i664.emitting = !!i665[23]
  i664.numCornerVertices = i665[24]
  i664.numCapVertices = i665[25]
  i664.minVertexDistance = i665[26]
  i664.colorGradient = i665[27] ? new pc.ColorGradient(i665[27][0], i665[27][1], i665[27][2]) : null
  i664.startColor = new pc.Color(i665[28], i665[29], i665[30], i665[31])
  i664.endColor = new pc.Color(i665[32], i665[33], i665[34], i665[35])
  i664.generateLightingData = !!i665[36]
  i664.textureMode = i665[37]
  i664.alignment = i665[38]
  i664.widthCurve = new pc.AnimationCurve( { keys_flow: i665[39] } )
  return i664
}

Deserializers["Liquid"] = function (request, data, root) {
  var i672 = root || request.c( 'Liquid' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'collider2d')
  request.r(i673[2], i673[3], 0, i672, 'collider2dLiquid')
  request.r(i673[4], i673[5], 0, i672, 'metaballParticleClass')
  request.r(i673[6], i673[7], 0, i672, 'rb')
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i675 = data
  i674.name = i675[0]
  i674.tagId = i675[1]
  i674.enabled = !!i675[2]
  i674.isStatic = !!i675[3]
  i674.layer = i675[4]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i677 = data
  i676.name = i677[0]
  i676.halfPrecision = !!i677[1]
  i676.vertexCount = i677[2]
  i676.aabb = i677[3]
  var i679 = i677[4]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( !!i679[i + 0] );
  }
  i676.streams = i678
  i676.vertices = i677[5]
  var i681 = i677[6]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i681[i + 0]) );
  }
  i676.subMeshes = i680
  var i683 = i677[7]
  var i682 = []
  for(var i = 0; i < i683.length; i += 16) {
    i682.push( new pc.Mat4().setData(i683[i + 0], i683[i + 1], i683[i + 2], i683[i + 3],  i683[i + 4], i683[i + 5], i683[i + 6], i683[i + 7],  i683[i + 8], i683[i + 9], i683[i + 10], i683[i + 11],  i683[i + 12], i683[i + 13], i683[i + 14], i683[i + 15]) );
  }
  i676.bindposes = i682
  var i685 = i677[8]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i685[i + 0]) );
  }
  i676.blendShapes = i684
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i691 = data
  i690.triangles = i691[0]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i697 = data
  i696.name = i697[0]
  var i699 = i697[1]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i699[i + 0]) );
  }
  i696.frames = i698
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i701 = data
  i700.name = i701[0]
  i700.width = i701[1]
  i700.height = i701[2]
  i700.anisoLevel = i701[3]
  i700.filterMode = i701[4]
  i700.hdr = !!i701[5]
  i700.format = i701[6]
  i700.wrapMode = i701[7]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i703 = data
  i702.name = i703[0]
  i702.atlasId = i703[1]
  i702.mipmapCount = i703[2]
  i702.hdr = !!i703[3]
  i702.size = i703[4]
  i702.anisoLevel = i703[5]
  i702.filterMode = i703[6]
  i702.wrapMode = i703[7]
  var i705 = i703[8]
  var i704 = []
  for(var i = 0; i < i705.length; i += 4) {
    i704.push( UnityEngine.Rect.MinMaxRect(i705[i + 0], i705[i + 1], i705[i + 2], i705[i + 3]) );
  }
  i702.rects = i704
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i709 = data
  i708.name = i709[0]
  i708.index = i709[1]
  i708.startup = !!i709[2]
  return i708
}

Deserializers["Water2D.PhysicsSimulation"] = function (request, data, root) {
  var i710 = root || request.c( 'Water2D.PhysicsSimulation' )
  var i711 = data
  i710.Simulate = !!i711[0]
  var i713 = i711[1]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rigidbody2D')))
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 1, i712, '')
  }
  i710.RBAltered = i712
  i710.alreadyCreated = !!i711[2]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i717 = data
  i716.pivot = new pc.Vec2( i717[0], i717[1] )
  i716.anchorMin = new pc.Vec2( i717[2], i717[3] )
  i716.anchorMax = new pc.Vec2( i717[4], i717[5] )
  i716.sizeDelta = new pc.Vec2( i717[6], i717[7] )
  i716.anchoredPosition3D = new pc.Vec3( i717[8], i717[9], i717[10] )
  i716.rotation = new pc.Quat(i717[11], i717[12], i717[13], i717[14])
  i716.scale = new pc.Vec3( i717[15], i717[16], i717[17] )
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i719 = data
  i718.enabled = !!i719[0]
  i718.planeDistance = i719[1]
  i718.referencePixelsPerUnit = i719[2]
  i718.isFallbackOverlay = !!i719[3]
  i718.renderMode = i719[4]
  i718.renderOrder = i719[5]
  i718.sortingLayerName = i719[6]
  i718.sortingOrder = i719[7]
  i718.scaleFactor = i719[8]
  request.r(i719[9], i719[10], 0, i718, 'worldCamera')
  i718.overrideSorting = !!i719[11]
  i718.pixelPerfect = !!i719[12]
  i718.targetDisplay = i719[13]
  i718.overridePixelPerfect = !!i719[14]
  return i718
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i721 = data
  i720.m_UiScaleMode = i721[0]
  i720.m_ReferencePixelsPerUnit = i721[1]
  i720.m_ScaleFactor = i721[2]
  i720.m_ReferenceResolution = new pc.Vec2( i721[3], i721[4] )
  i720.m_ScreenMatchMode = i721[5]
  i720.m_MatchWidthOrHeight = i721[6]
  i720.m_PhysicalUnit = i721[7]
  i720.m_FallbackScreenDPI = i721[8]
  i720.m_DefaultSpriteDPI = i721[9]
  i720.m_DynamicPixelsPerUnit = i721[10]
  i720.m_PresetInfoIsWorld = !!i721[11]
  return i720
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i723 = data
  i722.m_IgnoreReversedGraphics = !!i723[0]
  i722.m_BlockingObjects = i723[1]
  i722.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i723[2] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i725 = data
  i724.m_Alpha = i725[0]
  i724.m_Interactable = !!i725[1]
  i724.m_BlocksRaycasts = !!i725[2]
  i724.m_IgnoreParentGroups = !!i725[3]
  i724.enabled = !!i725[4]
  return i724
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i727 = data
  i726.m_Spacing = i727[0]
  i726.m_ChildForceExpandWidth = !!i727[1]
  i726.m_ChildForceExpandHeight = !!i727[2]
  i726.m_ChildControlWidth = !!i727[3]
  i726.m_ChildControlHeight = !!i727[4]
  i726.m_ChildScaleWidth = !!i727[5]
  i726.m_ChildScaleHeight = !!i727[6]
  i726.m_ReverseArrangement = !!i727[7]
  i726.m_Padding = UnityEngine.RectOffset.FromPaddings(i727[8], i727[9], i727[10], i727[11])
  i726.m_ChildAlignment = i727[12]
  return i726
}

Deserializers["FaucetManager"] = function (request, data, root) {
  var i728 = root || request.c( 'FaucetManager' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, '<CanvasGroup>k__BackingField')
  request.r(i729[2], i729[3], 0, i728, 'faucetPrefab')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i731 = data
  i730.cullTransparentMesh = !!i731[0]
  return i730
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.Image' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'm_Sprite')
  i732.m_Type = i733[2]
  i732.m_PreserveAspect = !!i733[3]
  i732.m_FillCenter = !!i733[4]
  i732.m_FillMethod = i733[5]
  i732.m_FillAmount = i733[6]
  i732.m_FillClockwise = !!i733[7]
  i732.m_FillOrigin = i733[8]
  i732.m_UseSpriteMesh = !!i733[9]
  i732.m_PixelsPerUnitMultiplier = i733[10]
  request.r(i733[11], i733[12], 0, i732, 'm_Material')
  i732.m_Maskable = !!i733[13]
  i732.m_Color = new pc.Color(i733[14], i733[15], i733[16], i733[17])
  i732.m_RaycastTarget = !!i733[18]
  i732.m_RaycastPadding = new pc.Vec4( i733[19], i733[20], i733[21], i733[22] )
  return i732
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i735 = data
  var i737 = i735[0]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i737.length; i += 1) {
    i736.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i737[i + 0]));
  }
  i734.m_Delegates = i736
  return i734
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i741 = data
  i740.eventID = i741[0]
  i740.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i741[1], i740.callback)
  return i740
}

Deserializers["Faucet"] = function (request, data, root) {
  var i742 = root || request.c( 'Faucet' )
  var i743 = data
  i742.color = new pc.Color(i743[0], i743[1], i743[2], i743[3])
  request.r(i743[4], i743[5], 0, i742, 'image')
  request.r(i743[6], i743[7], 0, i742, 'spawner')
  request.r(i743[8], i743[9], 0, i742, 'eventTrigger')
  return i742
}

Deserializers["Water2D.Water2D_Spawner"] = function (request, data, root) {
  var i744 = root || request.c( 'Water2D.Water2D_Spawner' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'instance')
  i744.HashID = i745[2]
  i744.Water2DType = i745[3]
  i744.Water2DEmissionType = i745[4]
  i744.Water2DFillerType = i745[5]
  i744.FillerColliderMasked = !!i745[6]
  i744.Water2DRenderType = i745[7]
  i744.Water2DVersion = i745[8]
  request.r(i745[9], i745[10], 0, i744, 'DropObject')
  var i747 = i745[11]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.WaterDropsObjects = i746
  i744.ParticlesTag = i745[12]
  i744.PersistentFluid = !!i745[13]
  i744.size = i745[14]
  i744.ScaleDown = !!i745[15]
  i744.LifeTime = i745[16]
  i744.DelayBetweenParticles = i745[17]
  i744.TrailStartSize = i745[18]
  i744.TrailEndSize = i745[19]
  i744.TrailDelay = i745[20]
  request.r(i745[21], i745[22], 0, i744, 'WaterMaterial')
  i744.StyleByID = !!i745[23]
  i744.Sorting = i745[24]
  i744.ColorScheme = i745[25]
  i744.FillColor = new pc.Color(i745[26], i745[27], i745[28], i745[29])
  i744.StrokeColor = new pc.Color(i745[30], i745[31], i745[32], i745[33])
  i744._lastStrokeColor = new pc.Color(i745[34], i745[35], i745[36], i745[37])
  i744.Blending = !!i745[38]
  i744._lastBlending = !!i745[39]
  i744.AlphaCutOff = i745[40]
  i744.AlphaStroke = i745[41]
  i744.TintColor = new pc.Color(i745[42], i745[43], i745[44], i745[45])
  i744.Intensity = i745[46]
  i744.LensMag = i745[47]
  i744.Distortion = i745[48]
  i744.DistortionSpeed = i745[49]
  i744.GlowEffect = !!i745[50]
  i744.GlowColor = new pc.Color(i745[51], i745[52], i745[53], i745[54])
  i744.GlowSize = i745[55]
  i744.GlowSortingOrder = i745[56]
  i744.initSpeed = new pc.Vec2( i745[57], i745[58] )
  i744.Speed = i745[59]
  request.r(i745[60], i745[61], 0, i744, 'PhysicMat')
  i744.ColliderSize = i745[62]
  i744.LinearDrag = i745[63]
  i744.AngularDrag = i745[64]
  i744.GravityScale = i745[65]
  i744.FreezeRotation = !!i745[66]
  i744.SpeedLimiterX = new pc.Vec2( i745[67], i745[68] )
  i744.SpeedLimiterY = new pc.Vec2( i745[69], i745[70] )
  i744.SimulateOnAwake = !!i745[71]
  i744.SimulateInEditor = !!i745[72]
  i744.SimulateInPlayMode = !!i745[73]
  i744.DropCount = i745[74]
  i744._lastDropCount = i745[75]
  i744.Loop = !!i745[76]
  i744.DropsUsed = i745[77]
  i744.DynamicChanges = !!i745[78]
  i744.OnValidateShapeFill = request.d('Water2D.Water2DEvents', i745[79], i744.OnValidateShapeFill)
  var i749 = i745[80]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i744.ShapeFillCollider2D = i748
  i744.ShapeFillCollider2DCount = i745[81]
  i744.ShapeFillAccuracy = i745[82]
  i744.OnCollisionEnterList = request.d('Water2D.Water2DEvents', i745[83], i744.OnCollisionEnterList)
  i744.OnSpawnerAboutStart = request.d('Water2D.Water2DEvents', i745[84], i744.OnSpawnerAboutStart)
  i744.OnSpawnerAboutEnd = request.d('Water2D.Water2DEvents', i745[85], i744.OnSpawnerAboutEnd)
  i744.OnSpawnerEmitingParticle = request.d('Water2D.Water2DEvents', i745[86], i744.OnSpawnerEmitingParticle)
  i744.isRefractingMaterial = !!i745[87]
  i744._lastGlowEnabledValue = !!i745[88]
  return i744
}

Deserializers["Water2D.Water2DEvents"] = function (request, data, root) {
  var i752 = root || request.c( 'Water2D.Water2DEvents' )
  var i753 = data
  i752.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i753[0], i752.m_PersistentCalls)
  return i752
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i755 = data
  var i757 = i755[0]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(request.d('UnityEngine.Events.PersistentCall', i757[i + 0]));
  }
  i754.m_Calls = i756
  return i754
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_Target')
  i760.m_TargetAssemblyTypeName = i761[2]
  i760.m_MethodName = i761[3]
  i760.m_Mode = i761[4]
  i760.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i761[5], i760.m_Arguments)
  i760.m_CallState = i761[6]
  return i760
}

Deserializers["Glass"] = function (request, data, root) {
  var i764 = root || request.c( 'Glass' )
  var i765 = data
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i767 = data
  i766.enabled = !!i767[0]
  i766.isTrigger = !!i767[1]
  i766.usedByEffector = !!i767[2]
  i766.density = i767[3]
  i766.offset = new pc.Vec2( i767[4], i767[5] )
  request.r(i767[6], i767[7], 0, i766, 'material')
  i766.edgeRadius = i767[8]
  var i769 = i767[9]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
    i768.push( new pc.Vec2( i769[i + 0], i769[i + 1] ) );
  }
  i766.points = i768
  i766.useAdjacentStartPoint = !!i767[10]
  i766.adjacentStartPoint = new pc.Vec2( i767[11], i767[12] )
  i766.useAdjacentEndPoint = !!i767[13]
  i766.adjacentEndPoint = new pc.Vec2( i767[14], i767[15] )
  return i766
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.Button' )
  var i773 = data
  i772.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i773[0], i772.m_OnClick)
  i772.m_Navigation = request.d('UnityEngine.UI.Navigation', i773[1], i772.m_Navigation)
  i772.m_Transition = i773[2]
  i772.m_Colors = request.d('UnityEngine.UI.ColorBlock', i773[3], i772.m_Colors)
  i772.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i773[4], i772.m_SpriteState)
  i772.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i773[5], i772.m_AnimationTriggers)
  i772.m_Interactable = !!i773[6]
  request.r(i773[7], i773[8], 0, i772, 'm_TargetGraphic')
  return i772
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i775 = data
  i774.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i775[0], i774.m_PersistentCalls)
  return i774
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_ObjectArgument')
  i776.m_ObjectArgumentAssemblyTypeName = i777[2]
  i776.m_IntArgument = i777[3]
  i776.m_FloatArgument = i777[4]
  i776.m_StringArgument = i777[5]
  i776.m_BoolArgument = !!i777[6]
  return i776
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i779 = data
  i778.m_Mode = i779[0]
  i778.m_WrapAround = !!i779[1]
  request.r(i779[2], i779[3], 0, i778, 'm_SelectOnUp')
  request.r(i779[4], i779[5], 0, i778, 'm_SelectOnDown')
  request.r(i779[6], i779[7], 0, i778, 'm_SelectOnLeft')
  request.r(i779[8], i779[9], 0, i778, 'm_SelectOnRight')
  return i778
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i781 = data
  i780.m_NormalColor = new pc.Color(i781[0], i781[1], i781[2], i781[3])
  i780.m_HighlightedColor = new pc.Color(i781[4], i781[5], i781[6], i781[7])
  i780.m_PressedColor = new pc.Color(i781[8], i781[9], i781[10], i781[11])
  i780.m_SelectedColor = new pc.Color(i781[12], i781[13], i781[14], i781[15])
  i780.m_DisabledColor = new pc.Color(i781[16], i781[17], i781[18], i781[19])
  i780.m_ColorMultiplier = i781[20]
  i780.m_FadeDuration = i781[21]
  return i780
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'm_HighlightedSprite')
  request.r(i783[2], i783[3], 0, i782, 'm_PressedSprite')
  request.r(i783[4], i783[5], 0, i782, 'm_SelectedSprite')
  request.r(i783[6], i783[7], 0, i782, 'm_DisabledSprite')
  return i782
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i785 = data
  i784.m_NormalTrigger = i785[0]
  i784.m_HighlightedTrigger = i785[1]
  i784.m_PressedTrigger = i785[2]
  i784.m_SelectedTrigger = i785[3]
  i784.m_DisabledTrigger = i785[4]
  return i784
}

Deserializers["GameManager2"] = function (request, data, root) {
  var i786 = root || request.c( 'GameManager2' )
  var i787 = data
  var i789 = i787[0]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('Faucet')))
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 1, i788, '')
  }
  i786.lstFaucet = i788
  request.r(i787[1], i787[2], 0, i786, 'canvasEndcard')
  return i786
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i792 = root || request.c( 'SoundManager' )
  var i793 = data
  var i795 = i793[0]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('AudioConfig')))
  for(var i = 0; i < i795.length; i += 1) {
    i794.add(request.d('AudioConfig', i795[i + 0]));
  }
  i792.audioConfigs = i794
  request.r(i793[1], i793[2], 0, i792, 'pouring')
  return i792
}

Deserializers["AudioConfig"] = function (request, data, root) {
  var i798 = root || request.c( 'AudioConfig' )
  var i799 = data
  i798.keySound = i799[0]
  request.r(i799[1], i799[2], 0, i798, 'clip')
  request.r(i799[3], i799[4], 0, i798, 'audioSource')
  i798.volume = i799[5]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'clip')
  request.r(i801[2], i801[3], 0, i800, 'outputAudioMixerGroup')
  i800.playOnAwake = !!i801[4]
  i800.loop = !!i801[5]
  i800.time = i801[6]
  i800.volume = i801[7]
  i800.pitch = i801[8]
  i800.enabled = !!i801[9]
  return i800
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'm_FirstSelected')
  i802.m_sendNavigationEvents = !!i803[2]
  i802.m_DragThreshold = i803[3]
  return i802
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i805 = data
  i804.m_HorizontalAxis = i805[0]
  i804.m_VerticalAxis = i805[1]
  i804.m_SubmitButton = i805[2]
  i804.m_CancelButton = i805[3]
  i804.m_InputActionsPerSecond = i805[4]
  i804.m_RepeatDelay = i805[5]
  i804.m_ForceModuleActive = !!i805[6]
  i804.m_SendPointerHoverToParent = !!i805[7]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i807 = data
  i806.enabled = !!i807[0]
  i806.aspect = i807[1]
  i806.orthographic = !!i807[2]
  i806.orthographicSize = i807[3]
  i806.backgroundColor = new pc.Color(i807[4], i807[5], i807[6], i807[7])
  i806.nearClipPlane = i807[8]
  i806.farClipPlane = i807[9]
  i806.fieldOfView = i807[10]
  i806.depth = i807[11]
  i806.clearFlags = i807[12]
  i806.cullingMask = i807[13]
  i806.rect = i807[14]
  request.r(i807[15], i807[16], 0, i806, 'targetTexture')
  i806.usePhysicalProperties = !!i807[17]
  i806.focalLength = i807[18]
  i806.sensorSize = new pc.Vec2( i807[19], i807[20] )
  i806.lensShift = new pc.Vec2( i807[21], i807[22] )
  i806.gateFit = i807[23]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'sharedMesh')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i811 = data
  i810.enabled = !!i811[0]
  i810.isTrigger = !!i811[1]
  request.r(i811[2], i811[3], 0, i810, 'material')
  request.r(i811[4], i811[5], 0, i810, 'sharedMesh')
  i810.convex = !!i811[6]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'additionalVertexStreams')
  i812.enabled = !!i813[2]
  request.r(i813[3], i813[4], 0, i812, 'sharedMaterial')
  var i815 = i813[5]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.sharedMaterials = i814
  i812.receiveShadows = !!i813[6]
  i812.shadowCastingMode = i813[7]
  i812.sortingLayerID = i813[8]
  i812.sortingOrder = i813[9]
  i812.lightmapIndex = i813[10]
  i812.lightmapSceneIndex = i813[11]
  i812.lightmapScaleOffset = new pc.Vec4( i813[12], i813[13], i813[14], i813[15] )
  i812.lightProbeUsage = i813[16]
  i812.reflectionProbeUsage = i813[17]
  return i812
}

Deserializers["ResizeQuadEffectController"] = function (request, data, root) {
  var i816 = root || request.c( 'ResizeQuadEffectController' )
  var i817 = data
  i816.FlipTexture = !!i817[0]
  i816.sorting = i817[1]
  i816.isHorizontalScreen = !!i817[2]
  return i816
}

Deserializers["UnityEngine.UI.GridLayoutGroup"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.GridLayoutGroup' )
  var i819 = data
  i818.m_StartCorner = i819[0]
  i818.m_StartAxis = i819[1]
  i818.m_CellSize = new pc.Vec2( i819[2], i819[3] )
  i818.m_Spacing = new pc.Vec2( i819[4], i819[5] )
  i818.m_Constraint = i819[6]
  i818.m_ConstraintCount = i819[7]
  i818.m_Padding = UnityEngine.RectOffset.FromPaddings(i819[8], i819[9], i819[10], i819[11])
  i818.m_ChildAlignment = i819[12]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'animatorController')
  i820.updateMode = i821[2]
  var i823 = i821[3]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.humanBones = i822
  i820.enabled = !!i821[4]
  return i820
}

Deserializers["Water2D.SpawnersManager"] = function (request, data, root) {
  var i826 = root || request.c( 'Water2D.SpawnersManager' )
  var i827 = data
  var i829 = i827[0]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i829.length; i += 1) {
    i828.add(i829[i + 0]);
  }
  i826.spawnersID = i828
  var i831 = i827[1]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Color')))
  for(var i = 0; i < i831.length; i += 4) {
    i830.add(new pc.Color(i831[i + 0], i831[i + 1], i831[i + 2], i831[i + 3]));
  }
  i826.FillColorByID = i830
  var i833 = i827[2]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(i833[i + 0]);
  }
  i826.CuttOffByID = i832
  var i835 = i827[3]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(i835[i + 0]);
  }
  i826.MultiplierByID = i834
  var i837 = i827[4]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Color')))
  for(var i = 0; i < i837.length; i += 4) {
    i836.add(new pc.Color(i837[i + 0], i837[i + 1], i837[i + 2], i837[i + 3]));
  }
  i826.FresnelColorByID = i836
  var i839 = i827[5]
  var i838 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i839.length; i += 1) {
    i838.add(i839[i + 0]);
  }
  i826.StyleByID = i838
  var i841 = i827[6]
  var i840 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i841.length; i += 1) {
    i840.add(i841[i + 0]);
  }
  i826.LensSizeByID = i840
  var i843 = i827[7]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i843.length; i += 1) {
    i842.add(i843[i + 0]);
  }
  i826.MagnitudeByID = i842
  var i845 = i827[8]
  var i844 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i845.length; i += 1) {
    i844.add(i845[i + 0]);
  }
  i826.SpeedByID = i844
  var i847 = i827[9]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i826._allparticles = i846
  i826.forceToClearColorBuffers = !!i827[10]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i857 = data
  i856.ambientIntensity = i857[0]
  i856.reflectionIntensity = i857[1]
  i856.ambientMode = i857[2]
  i856.ambientLight = new pc.Color(i857[3], i857[4], i857[5], i857[6])
  i856.ambientSkyColor = new pc.Color(i857[7], i857[8], i857[9], i857[10])
  i856.ambientGroundColor = new pc.Color(i857[11], i857[12], i857[13], i857[14])
  i856.ambientEquatorColor = new pc.Color(i857[15], i857[16], i857[17], i857[18])
  i856.fogColor = new pc.Color(i857[19], i857[20], i857[21], i857[22])
  i856.fogEndDistance = i857[23]
  i856.fogStartDistance = i857[24]
  i856.fogDensity = i857[25]
  i856.fog = !!i857[26]
  request.r(i857[27], i857[28], 0, i856, 'skybox')
  i856.fogMode = i857[29]
  var i859 = i857[30]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i859[i + 0]) );
  }
  i856.lightmaps = i858
  i856.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i857[31], i856.lightProbes)
  i856.lightmapsMode = i857[32]
  i856.mixedBakeMode = i857[33]
  i856.environmentLightingMode = i857[34]
  i856.ambientProbe = new pc.SphericalHarmonicsL2(i857[35])
  i856.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i857[36])
  i856.useReferenceAmbientProbe = !!i857[37]
  request.r(i857[38], i857[39], 0, i856, 'customReflection')
  request.r(i857[40], i857[41], 0, i856, 'defaultReflection')
  i856.defaultReflectionMode = i857[42]
  i856.defaultReflectionResolution = i857[43]
  i856.sunLightObjectId = i857[44]
  i856.pixelLightCount = i857[45]
  i856.defaultReflectionHDR = !!i857[46]
  i856.hasLightDataAsset = !!i857[47]
  i856.hasManualGenerate = !!i857[48]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'lightmapColor')
  request.r(i863[2], i863[3], 0, i862, 'lightmapDirection')
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i864 = root || new UnityEngine.LightProbes()
  var i865 = data
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i871 = data
  i870.name = i871[0]
  i870.bounciness = i871[1]
  i870.friction = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i873 = data
  var i875 = i873[0]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(i875[i + 0]);
  }
  i872.invalidShaderVariants = i874
  i872.name = i873[1]
  i872.guid = i873[2]
  var i877 = i873[3]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( i877[i + 0] );
  }
  i872.shaderDefinedKeywords = i876
  var i879 = i873[4]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i879[i + 0]) );
  }
  i872.passes = i878
  var i881 = i873[5]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i881[i + 0]) );
  }
  i872.usePasses = i880
  var i883 = i873[6]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i883[i + 0]) );
  }
  i872.defaultParameterValues = i882
  request.r(i873[7], i873[8], 0, i872, 'unityFallbackShader')
  i872.readDepth = !!i873[9]
  i872.isCreatedByShaderGraph = !!i873[10]
  i872.usedBatchUniforms = i873[11]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i890 = root || new pc.UnityShaderPass()
  var i891 = data
  i890.id = i891[0]
  i890.subShaderIndex = i891[1]
  i890.name = i891[2]
  i890.passType = i891[3]
  i890.usePass = !!i891[4]
  i890.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[5], i890.zTest)
  i890.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[6], i890.zWrite)
  i890.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[7], i890.culling)
  i890.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i891[8], i890.blending)
  i890.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i891[9], i890.alphaBlending)
  i890.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[10], i890.colorWriteMask)
  i890.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[11], i890.offsetUnits)
  i890.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[12], i890.offsetFactor)
  i890.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[13], i890.stencilRef)
  i890.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[14], i890.stencilReadMask)
  i890.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[15], i890.stencilWriteMask)
  i890.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i891[16], i890.stencilOp)
  i890.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i891[17], i890.stencilOpFront)
  i890.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i891[18], i890.stencilOpBack)
  var i893 = i891[19]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i893[i + 0]) );
  }
  i890.tags = i892
  var i895 = i891[20]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( i895[i + 0] );
  }
  i890.passDefinedKeywords = i894
  var i897 = i891[21]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i897[i + 0]) );
  }
  i890.passDefinedKeywordGroups = i896
  var i899 = i891[22]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i899[i + 0]) );
  }
  i890.variants = i898
  var i901 = i891[23]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i901[i + 0]) );
  }
  i890.excludedVariants = i900
  i890.hasDepthReader = !!i891[24]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i903 = data
  i902.val = i903[0]
  i902.name = i903[1]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i905 = data
  i904.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[0], i904.src)
  i904.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[1], i904.dst)
  i904.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[2], i904.op)
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i907 = data
  i906.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[0], i906.pass)
  i906.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[1], i906.fail)
  i906.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[2], i906.zFail)
  i906.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i907[3], i906.comp)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i911 = data
  i910.name = i911[0]
  i910.value = i911[1]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i915 = data
  var i917 = i915[0]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i914.keywords = i916
  i914.hasDiscard = !!i915[1]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i921 = data
  i920.passId = i921[0]
  i920.subShaderIndex = i921[1]
  var i923 = i921[2]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i920.keywords = i922
  i920.vertexProgram = i921[3]
  i920.fragmentProgram = i921[4]
  i920.readDepth = !!i921[5]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'shader')
  i926.pass = i927[2]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i931 = data
  i930.name = i931[0]
  i930.type = i931[1]
  i930.value = new pc.Vec4( i931[2], i931[3], i931[4], i931[5] )
  i930.textureValue = i931[6]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i933 = data
  i932.name = i933[0]
  request.r(i933[1], i933[2], 0, i932, 'texture')
  i932.aabb = i933[3]
  i932.vertices = i933[4]
  i932.triangles = i933[5]
  i932.textureRect = UnityEngine.Rect.MinMaxRect(i933[6], i933[7], i933[8], i933[9])
  i932.packedRect = UnityEngine.Rect.MinMaxRect(i933[10], i933[11], i933[12], i933[13])
  i932.border = new pc.Vec4( i933[14], i933[15], i933[16], i933[17] )
  i932.transparency = i933[18]
  i932.bounds = i933[19]
  i932.pixelsPerUnit = i933[20]
  i932.textureWidth = i933[21]
  i932.textureHeight = i933[22]
  i932.nativeSize = new pc.Vec2( i933[23], i933[24] )
  i932.pivot = new pc.Vec2( i933[25], i933[26] )
  i932.textureRectOffset = new pc.Vec2( i933[27], i933[28] )
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i935 = data
  i934.name = i935[0]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i937 = data
  i936.name = i937[0]
  i936.wrapMode = i937[1]
  i936.isLooping = !!i937[2]
  i936.length = i937[3]
  var i939 = i937[4]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i939[i + 0]) );
  }
  i936.curves = i938
  var i941 = i937[5]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i941[i + 0]) );
  }
  i936.events = i940
  i936.halfPrecision = !!i937[6]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i945 = data
  i944.path = i945[0]
  i944.componentType = i945[1]
  i944.property = i945[2]
  i944.keys = i945[3]
  var i947 = i945[4]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i947[i + 0]) );
  }
  i944.objectReferenceKeys = i946
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i951 = data
  i950.time = i951[0]
  request.r(i951[1], i951[2], 0, i950, 'value')
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i955 = data
  i954.functionName = i955[0]
  i954.floatParameter = i955[1]
  i954.intParameter = i955[2]
  i954.stringParameter = i955[3]
  request.r(i955[4], i955[5], 0, i954, 'objectReferenceParameter')
  i954.time = i955[6]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i957 = data
  i956.name = i957[0]
  i956.ascent = i957[1]
  i956.originalLineHeight = i957[2]
  i956.fontSize = i957[3]
  var i959 = i957[4]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i959[i + 0]) );
  }
  i956.characterInfo = i958
  request.r(i957[5], i957[6], 0, i956, 'texture')
  i956.originalFontSize = i957[7]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i963 = data
  i962.index = i963[0]
  i962.advance = i963[1]
  i962.bearing = i963[2]
  i962.glyphWidth = i963[3]
  i962.glyphHeight = i963[4]
  i962.minX = i963[5]
  i962.maxX = i963[6]
  i962.minY = i963[7]
  i962.maxY = i963[8]
  i962.uvBottomLeftX = i963[9]
  i962.uvBottomLeftY = i963[10]
  i962.uvBottomRightX = i963[11]
  i962.uvBottomRightY = i963[12]
  i962.uvTopLeftX = i963[13]
  i962.uvTopLeftY = i963[14]
  i962.uvTopRightX = i963[15]
  i962.uvTopRightY = i963[16]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i965 = data
  i964.name = i965[0]
  var i967 = i965[1]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i967[i + 0]) );
  }
  i964.states = i966
  var i969 = i965[2]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i969[i + 0]) );
  }
  i964.layers = i968
  var i971 = i965[3]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i971[i + 0]) );
  }
  i964.parameters = i970
  i964.animationClips = i965[4]
  i964.HasSubStateMachines = !!i965[5]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i975 = data
  i974.cycleOffset = i975[0]
  i974.cycleOffsetParameter = i975[1]
  i974.cycleOffsetParameterActive = !!i975[2]
  i974.mirror = !!i975[3]
  i974.mirrorParameter = i975[4]
  i974.mirrorParameterActive = !!i975[5]
  i974.motionId = i975[6]
  i974.nameHash = i975[7]
  i974.fullPathHash = i975[8]
  i974.speed = i975[9]
  i974.speedParameter = i975[10]
  i974.speedParameterActive = !!i975[11]
  i974.tag = i975[12]
  i974.name = i975[13]
  i974.layer = i975[14]
  i974.writeDefaultValues = !!i975[15]
  var i977 = i975[16]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i977[i + 0]) );
  }
  i974.transitions = i976
  var i979 = i975[17]
  var i978 = []
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 2, i978, '')
  }
  i974.behaviours = i978
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i983 = data
  i982.fullPath = i983[0]
  i982.canTransitionToSelf = !!i983[1]
  i982.duration = i983[2]
  i982.exitTime = i983[3]
  i982.hasExitTime = !!i983[4]
  i982.hasFixedDuration = !!i983[5]
  i982.interruptionSource = i983[6]
  i982.offset = i983[7]
  i982.orderedInterruption = !!i983[8]
  i982.destinationStateNameHash = i983[9]
  i982.destinationStateMachineId = i983[10]
  i982.isExit = !!i983[11]
  i982.mute = !!i983[12]
  i982.solo = !!i983[13]
  var i985 = i983[14]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i985[i + 0]) );
  }
  i982.conditions = i984
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i991 = data
  i990.blendingMode = i991[0]
  i990.defaultWeight = i991[1]
  i990.name = i991[2]
  i990.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i991[3], i990.stateMachine)
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i993 = data
  i992.id = i993[0]
  i992.defaultStateNameHash = i993[1]
  var i995 = i993[2]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i995[i + 0]) );
  }
  i992.entryTransitions = i994
  var i997 = i993[3]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i997[i + 0]) );
  }
  i992.anyStateTransitions = i996
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1001 = data
  i1000.destinationStateNameHash = i1001[0]
  i1000.destinationStateMachineId = i1001[1]
  i1000.isExit = !!i1001[2]
  i1000.mute = !!i1001[3]
  i1000.solo = !!i1001[4]
  var i1003 = i1001[5]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1003[i + 0]) );
  }
  i1000.conditions = i1002
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1007 = data
  i1006.defaultBool = !!i1007[0]
  i1006.defaultFloat = i1007[1]
  i1006.defaultInt = i1007[2]
  i1006.name = i1007[3]
  i1006.nameHash = i1007[4]
  i1006.type = i1007[5]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1009 = data
  i1008.name = i1009[0]
  i1008.bytes64 = i1009[1]
  i1008.data = i1009[2]
  return i1008
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_Settings' )
  var i1011 = data
  i1010.m_enableWordWrapping = !!i1011[0]
  i1010.m_enableKerning = !!i1011[1]
  i1010.m_enableExtraPadding = !!i1011[2]
  i1010.m_enableTintAllSprites = !!i1011[3]
  i1010.m_enableParseEscapeCharacters = !!i1011[4]
  i1010.m_EnableRaycastTarget = !!i1011[5]
  i1010.m_GetFontFeaturesAtRuntime = !!i1011[6]
  i1010.m_missingGlyphCharacter = i1011[7]
  i1010.m_warningsDisabled = !!i1011[8]
  request.r(i1011[9], i1011[10], 0, i1010, 'm_defaultFontAsset')
  i1010.m_defaultFontAssetPath = i1011[11]
  i1010.m_defaultFontSize = i1011[12]
  i1010.m_defaultAutoSizeMinRatio = i1011[13]
  i1010.m_defaultAutoSizeMaxRatio = i1011[14]
  i1010.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1011[15], i1011[16] )
  i1010.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1011[17], i1011[18] )
  i1010.m_autoSizeTextContainer = !!i1011[19]
  i1010.m_IsTextObjectScaleStatic = !!i1011[20]
  var i1013 = i1011[21]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 1, i1012, '')
  }
  i1010.m_fallbackFontAssets = i1012
  i1010.m_matchMaterialPreset = !!i1011[22]
  request.r(i1011[23], i1011[24], 0, i1010, 'm_defaultSpriteAsset')
  i1010.m_defaultSpriteAssetPath = i1011[25]
  i1010.m_enableEmojiSupport = !!i1011[26]
  i1010.m_MissingCharacterSpriteUnicode = i1011[27]
  i1010.m_defaultColorGradientPresetsPath = i1011[28]
  request.r(i1011[29], i1011[30], 0, i1010, 'm_defaultStyleSheet')
  i1010.m_StyleSheetsResourcePath = i1011[31]
  request.r(i1011[32], i1011[33], 0, i1010, 'm_leadingCharacters')
  request.r(i1011[34], i1011[35], 0, i1010, 'm_followingCharacters')
  i1010.m_UseModernHangulLineBreakingRules = !!i1011[36]
  return i1010
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1017 = data
  i1016.hashCode = i1017[0]
  request.r(i1017[1], i1017[2], 0, i1016, 'material')
  i1016.materialHashCode = i1017[3]
  request.r(i1017[4], i1017[5], 0, i1016, 'atlas')
  i1016.normalStyle = i1017[6]
  i1016.normalSpacingOffset = i1017[7]
  i1016.boldStyle = i1017[8]
  i1016.boldSpacing = i1017[9]
  i1016.italicStyle = i1017[10]
  i1016.tabSize = i1017[11]
  i1016.m_Version = i1017[12]
  i1016.m_SourceFontFileGUID = i1017[13]
  request.r(i1017[14], i1017[15], 0, i1016, 'm_SourceFontFile_EditorRef')
  request.r(i1017[16], i1017[17], 0, i1016, 'm_SourceFontFile')
  i1016.m_AtlasPopulationMode = i1017[18]
  i1016.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1017[19], i1016.m_FaceInfo)
  var i1019 = i1017[20]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.add(request.d('UnityEngine.TextCore.Glyph', i1019[i + 0]));
  }
  i1016.m_GlyphTable = i1018
  var i1021 = i1017[21]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.add(request.d('TMPro.TMP_Character', i1021[i + 0]));
  }
  i1016.m_CharacterTable = i1020
  var i1023 = i1017[22]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 2, i1022, '')
  }
  i1016.m_AtlasTextures = i1022
  i1016.m_AtlasTextureIndex = i1017[23]
  i1016.m_IsMultiAtlasTexturesEnabled = !!i1017[24]
  i1016.m_ClearDynamicDataOnBuild = !!i1017[25]
  var i1025 = i1017[26]
  var i1024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.add(request.d('UnityEngine.TextCore.GlyphRect', i1025[i + 0]));
  }
  i1016.m_UsedGlyphRects = i1024
  var i1027 = i1017[27]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('UnityEngine.TextCore.GlyphRect', i1027[i + 0]));
  }
  i1016.m_FreeGlyphRects = i1026
  i1016.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1017[28], i1016.m_fontInfo)
  i1016.m_AtlasWidth = i1017[29]
  i1016.m_AtlasHeight = i1017[30]
  i1016.m_AtlasPadding = i1017[31]
  i1016.m_AtlasRenderMode = i1017[32]
  var i1029 = i1017[33]
  var i1028 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.add(request.d('TMPro.TMP_Glyph', i1029[i + 0]));
  }
  i1016.m_glyphInfoList = i1028
  i1016.m_KerningTable = request.d('TMPro.KerningTable', i1017[34], i1016.m_KerningTable)
  i1016.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1017[35], i1016.m_FontFeatureTable)
  var i1031 = i1017[36]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 1, i1030, '')
  }
  i1016.fallbackFontAssets = i1030
  var i1033 = i1017[37]
  var i1032 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 1, i1032, '')
  }
  i1016.m_FallbackFontAssetTable = i1032
  i1016.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1017[38], i1016.m_CreationSettings)
  var i1035 = i1017[39]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('TMPro.TMP_FontWeightPair', i1035[i + 0]) );
  }
  i1016.m_FontWeightTable = i1034
  var i1037 = i1017[40]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('TMPro.TMP_FontWeightPair', i1037[i + 0]) );
  }
  i1016.fontWeights = i1036
  return i1016
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1039 = data
  i1038.m_FaceIndex = i1039[0]
  i1038.m_FamilyName = i1039[1]
  i1038.m_StyleName = i1039[2]
  i1038.m_PointSize = i1039[3]
  i1038.m_Scale = i1039[4]
  i1038.m_UnitsPerEM = i1039[5]
  i1038.m_LineHeight = i1039[6]
  i1038.m_AscentLine = i1039[7]
  i1038.m_CapLine = i1039[8]
  i1038.m_MeanLine = i1039[9]
  i1038.m_Baseline = i1039[10]
  i1038.m_DescentLine = i1039[11]
  i1038.m_SuperscriptOffset = i1039[12]
  i1038.m_SuperscriptSize = i1039[13]
  i1038.m_SubscriptOffset = i1039[14]
  i1038.m_SubscriptSize = i1039[15]
  i1038.m_UnderlineOffset = i1039[16]
  i1038.m_UnderlineThickness = i1039[17]
  i1038.m_StrikethroughOffset = i1039[18]
  i1038.m_StrikethroughThickness = i1039[19]
  i1038.m_TabWidth = i1039[20]
  return i1038
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1042 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1043 = data
  i1042.m_Index = i1043[0]
  i1042.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1043[1], i1042.m_Metrics)
  i1042.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1043[2], i1042.m_GlyphRect)
  i1042.m_Scale = i1043[3]
  i1042.m_AtlasIndex = i1043[4]
  i1042.m_ClassDefinitionType = i1043[5]
  return i1042
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1044 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1045 = data
  i1044.m_Width = i1045[0]
  i1044.m_Height = i1045[1]
  i1044.m_HorizontalBearingX = i1045[2]
  i1044.m_HorizontalBearingY = i1045[3]
  i1044.m_HorizontalAdvance = i1045[4]
  return i1044
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1047 = data
  i1046.m_X = i1047[0]
  i1046.m_Y = i1047[1]
  i1046.m_Width = i1047[2]
  i1046.m_Height = i1047[3]
  return i1046
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TMP_Character' )
  var i1051 = data
  i1050.m_ElementType = i1051[0]
  i1050.m_Unicode = i1051[1]
  i1050.m_GlyphIndex = i1051[2]
  i1050.m_Scale = i1051[3]
  return i1050
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1057 = data
  i1056.Name = i1057[0]
  i1056.PointSize = i1057[1]
  i1056.Scale = i1057[2]
  i1056.CharacterCount = i1057[3]
  i1056.LineHeight = i1057[4]
  i1056.Baseline = i1057[5]
  i1056.Ascender = i1057[6]
  i1056.CapHeight = i1057[7]
  i1056.Descender = i1057[8]
  i1056.CenterLine = i1057[9]
  i1056.SuperscriptOffset = i1057[10]
  i1056.SubscriptOffset = i1057[11]
  i1056.SubSize = i1057[12]
  i1056.Underline = i1057[13]
  i1056.UnderlineThickness = i1057[14]
  i1056.strikethrough = i1057[15]
  i1056.strikethroughThickness = i1057[16]
  i1056.TabWidth = i1057[17]
  i1056.Padding = i1057[18]
  i1056.AtlasWidth = i1057[19]
  i1056.AtlasHeight = i1057[20]
  return i1056
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1060 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1061 = data
  i1060.id = i1061[0]
  i1060.x = i1061[1]
  i1060.y = i1061[2]
  i1060.width = i1061[3]
  i1060.height = i1061[4]
  i1060.xOffset = i1061[5]
  i1060.yOffset = i1061[6]
  i1060.xAdvance = i1061[7]
  i1060.scale = i1061[8]
  return i1060
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.KerningTable' )
  var i1063 = data
  var i1065 = i1063[0]
  var i1064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.add(request.d('TMPro.KerningPair', i1065[i + 0]));
  }
  i1062.kerningPairs = i1064
  return i1062
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.KerningPair' )
  var i1069 = data
  i1068.xOffset = i1069[0]
  i1068.m_FirstGlyph = i1069[1]
  i1068.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1069[2], i1068.m_FirstGlyphAdjustments)
  i1068.m_SecondGlyph = i1069[3]
  i1068.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1069[4], i1068.m_SecondGlyphAdjustments)
  i1068.m_IgnoreSpacingAdjustments = !!i1069[5]
  return i1068
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1073[i + 0]));
  }
  i1070.m_GlyphPairAdjustmentRecords = i1072
  return i1070
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1076 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1077 = data
  i1076.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1077[0], i1076.m_FirstAdjustmentRecord)
  i1076.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1077[1], i1076.m_SecondAdjustmentRecord)
  i1076.m_FeatureLookupFlags = i1077[2]
  return i1076
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1079 = data
  i1078.m_GlyphIndex = i1079[0]
  i1078.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1079[1], i1078.m_GlyphValueRecord)
  return i1078
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1080 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1081 = data
  i1080.m_XPlacement = i1081[0]
  i1080.m_YPlacement = i1081[1]
  i1080.m_XAdvance = i1081[2]
  i1080.m_YAdvance = i1081[3]
  return i1080
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1083 = data
  i1082.sourceFontFileName = i1083[0]
  i1082.sourceFontFileGUID = i1083[1]
  i1082.pointSizeSamplingMode = i1083[2]
  i1082.pointSize = i1083[3]
  i1082.padding = i1083[4]
  i1082.packingMode = i1083[5]
  i1082.atlasWidth = i1083[6]
  i1082.atlasHeight = i1083[7]
  i1082.characterSetSelectionMode = i1083[8]
  i1082.characterSequence = i1083[9]
  i1082.referencedFontAssetGUID = i1083[10]
  i1082.referencedTextAssetGUID = i1083[11]
  i1082.fontStyle = i1083[12]
  i1082.fontStyleModifier = i1083[13]
  i1082.renderMode = i1083[14]
  i1082.includeFontFeatures = !!i1083[15]
  return i1082
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'regularTypeface')
  request.r(i1087[2], i1087[3], 0, i1086, 'italicTypeface')
  return i1086
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1089 = data
  i1088.hashCode = i1089[0]
  request.r(i1089[1], i1089[2], 0, i1088, 'material')
  i1088.materialHashCode = i1089[3]
  request.r(i1089[4], i1089[5], 0, i1088, 'spriteSheet')
  var i1091 = i1089[6]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('TMPro.TMP_Sprite', i1091[i + 0]));
  }
  i1088.spriteInfoList = i1090
  var i1093 = i1089[7]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1093.length; i += 2) {
  request.r(i1093[i + 0], i1093[i + 1], 1, i1092, '')
  }
  i1088.fallbackSpriteAssets = i1092
  i1088.m_Version = i1089[8]
  i1088.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1089[9], i1088.m_FaceInfo)
  var i1095 = i1089[10]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.add(request.d('TMPro.TMP_SpriteCharacter', i1095[i + 0]));
  }
  i1088.m_SpriteCharacterTable = i1094
  var i1097 = i1089[11]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(request.d('TMPro.TMP_SpriteGlyph', i1097[i + 0]));
  }
  i1088.m_SpriteGlyphTable = i1096
  return i1088
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1100 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.hashCode = i1101[1]
  i1100.unicode = i1101[2]
  i1100.pivot = new pc.Vec2( i1101[3], i1101[4] )
  request.r(i1101[5], i1101[6], 0, i1100, 'sprite')
  i1100.id = i1101[7]
  i1100.x = i1101[8]
  i1100.y = i1101[9]
  i1100.width = i1101[10]
  i1100.height = i1101[11]
  i1100.xOffset = i1101[12]
  i1100.yOffset = i1101[13]
  i1100.xAdvance = i1101[14]
  i1100.scale = i1101[15]
  return i1100
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1106 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1107 = data
  i1106.m_Name = i1107[0]
  i1106.m_HashCode = i1107[1]
  i1106.m_ElementType = i1107[2]
  i1106.m_Unicode = i1107[3]
  i1106.m_GlyphIndex = i1107[4]
  i1106.m_Scale = i1107[5]
  return i1106
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1110 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'sprite')
  i1110.m_Index = i1111[2]
  i1110.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1111[3], i1110.m_Metrics)
  i1110.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1111[4], i1110.m_GlyphRect)
  i1110.m_Scale = i1111[5]
  i1110.m_AtlasIndex = i1111[6]
  i1110.m_ClassDefinitionType = i1111[7]
  return i1110
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1112 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1113 = data
  var i1115 = i1113[0]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('TMPro.TMP_Style', i1115[i + 0]));
  }
  i1112.m_StyleList = i1114
  return i1112
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_Style' )
  var i1119 = data
  i1118.m_Name = i1119[0]
  i1118.m_HashCode = i1119[1]
  i1118.m_OpeningDefinition = i1119[2]
  i1118.m_ClosingDefinition = i1119[3]
  i1118.m_OpeningTagArray = i1119[4]
  i1118.m_ClosingTagArray = i1119[5]
  i1118.m_OpeningTagUnicodeArray = i1119[6]
  i1118.m_ClosingTagUnicodeArray = i1119[7]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1123[i + 0]) );
  }
  i1120.files = i1122
  i1120.componentToPrefabIds = i1121[1]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1127 = data
  i1126.path = i1127[0]
  request.r(i1127[1], i1127[2], 0, i1126, 'unityObject')
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1131[i + 0]) );
  }
  i1128.scriptsExecutionOrder = i1130
  var i1133 = i1129[1]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1133[i + 0]) );
  }
  i1128.sortingLayers = i1132
  var i1135 = i1129[2]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1135[i + 0]) );
  }
  i1128.cullingLayers = i1134
  i1128.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1129[3], i1128.timeSettings)
  i1128.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1129[4], i1128.physicsSettings)
  i1128.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1129[5], i1128.physics2DSettings)
  i1128.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1129[6], i1128.qualitySettings)
  i1128.enableRealtimeShadows = !!i1129[7]
  i1128.enableAutoInstancing = !!i1129[8]
  i1128.enableDynamicBatching = !!i1129[9]
  i1128.lightmapEncodingQuality = i1129[10]
  i1128.desiredColorSpace = i1129[11]
  var i1137 = i1129[12]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1128.allTags = i1136
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.value = i1141[1]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1145 = data
  i1144.id = i1145[0]
  i1144.name = i1145[1]
  i1144.value = i1145[2]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1149 = data
  i1148.id = i1149[0]
  i1148.name = i1149[1]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1151 = data
  i1150.fixedDeltaTime = i1151[0]
  i1150.maximumDeltaTime = i1151[1]
  i1150.timeScale = i1151[2]
  i1150.maximumParticleTimestep = i1151[3]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1153 = data
  i1152.gravity = new pc.Vec3( i1153[0], i1153[1], i1153[2] )
  i1152.defaultSolverIterations = i1153[3]
  i1152.bounceThreshold = i1153[4]
  i1152.autoSyncTransforms = !!i1153[5]
  i1152.autoSimulation = !!i1153[6]
  var i1155 = i1153[7]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1155[i + 0]) );
  }
  i1152.collisionMatrix = i1154
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1159 = data
  i1158.enabled = !!i1159[0]
  i1158.layerId = i1159[1]
  i1158.otherLayerId = i1159[2]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1161 = data
  request.r(i1161[0], i1161[1], 0, i1160, 'material')
  i1160.gravity = new pc.Vec2( i1161[2], i1161[3] )
  i1160.positionIterations = i1161[4]
  i1160.velocityIterations = i1161[5]
  i1160.velocityThreshold = i1161[6]
  i1160.maxLinearCorrection = i1161[7]
  i1160.maxAngularCorrection = i1161[8]
  i1160.maxTranslationSpeed = i1161[9]
  i1160.maxRotationSpeed = i1161[10]
  i1160.baumgarteScale = i1161[11]
  i1160.baumgarteTOIScale = i1161[12]
  i1160.timeToSleep = i1161[13]
  i1160.linearSleepTolerance = i1161[14]
  i1160.angularSleepTolerance = i1161[15]
  i1160.defaultContactOffset = i1161[16]
  i1160.autoSimulation = !!i1161[17]
  i1160.queriesHitTriggers = !!i1161[18]
  i1160.queriesStartInColliders = !!i1161[19]
  i1160.callbacksOnDisable = !!i1161[20]
  i1160.reuseCollisionCallbacks = !!i1161[21]
  i1160.autoSyncTransforms = !!i1161[22]
  var i1163 = i1161[23]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1163[i + 0]) );
  }
  i1160.collisionMatrix = i1162
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1167 = data
  i1166.enabled = !!i1167[0]
  i1166.layerId = i1167[1]
  i1166.otherLayerId = i1167[2]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1171[i + 0]) );
  }
  i1168.qualityLevels = i1170
  var i1173 = i1169[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( i1173[i + 0] );
  }
  i1168.names = i1172
  i1168.shadows = i1169[2]
  i1168.anisotropicFiltering = i1169[3]
  i1168.antiAliasing = i1169[4]
  i1168.lodBias = i1169[5]
  i1168.shadowCascades = i1169[6]
  i1168.shadowDistance = i1169[7]
  i1168.shadowmaskMode = i1169[8]
  i1168.shadowProjection = i1169[9]
  i1168.shadowResolution = i1169[10]
  i1168.softParticles = !!i1169[11]
  i1168.softVegetation = !!i1169[12]
  i1168.activeColorSpace = i1169[13]
  i1168.desiredColorSpace = i1169[14]
  i1168.masterTextureLimit = i1169[15]
  i1168.maxQueuedFrames = i1169[16]
  i1168.particleRaycastBudget = i1169[17]
  i1168.pixelLightCount = i1169[18]
  i1168.realtimeReflectionProbes = !!i1169[19]
  i1168.shadowCascade2Split = i1169[20]
  i1168.shadowCascade4Split = new pc.Vec3( i1169[21], i1169[22], i1169[23] )
  i1168.streamingMipmapsActive = !!i1169[24]
  i1168.vSyncCount = i1169[25]
  i1168.asyncUploadBufferSize = i1169[26]
  i1168.asyncUploadTimeSlice = i1169[27]
  i1168.billboardsFaceCameraPosition = !!i1169[28]
  i1168.shadowNearPlaneOffset = i1169[29]
  i1168.streamingMipmapsMemoryBudget = i1169[30]
  i1168.maximumLODLevel = i1169[31]
  i1168.streamingMipmapsAddAllCameras = !!i1169[32]
  i1168.streamingMipmapsMaxLevelReduction = i1169[33]
  i1168.streamingMipmapsRenderersPerFrame = i1169[34]
  i1168.resolutionScalingFixedDPIFactor = i1169[35]
  i1168.streamingMipmapsMaxFileIORequests = i1169[36]
  i1168.currentQualityLevel = i1169[37]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1179 = data
  i1178.weight = i1179[0]
  i1178.vertices = i1179[1]
  i1178.normals = i1179[2]
  i1178.tangents = i1179[3]
  return i1178
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i1181 = data
  i1180.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1181[0], i1180.m_PersistentCalls)
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1185 = data
  i1184.mode = i1185[0]
  i1184.parameter = i1185[1]
  i1184.threshold = i1185[2]
  return i1184
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1186 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1187 = data
  i1186.xPlacement = i1187[0]
  i1186.yPlacement = i1187[1]
  i1186.xAdvance = i1187[2]
  i1186.yAdvance = i1187[3]
  return i1186
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"format":6,"wrapMode":7},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[64],"65":[18],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[7],"75":[7],"76":[7],"77":[7],"78":[7],"79":[7],"80":[7],"81":[7],"82":[7],"83":[7],"84":[7],"85":[7],"86":[7],"87":[18],"88":[42],"89":[90],"91":[90],"17":[16],"92":[7,93],"94":[95],"96":[31],"97":[18],"98":[16],"99":[39,42],"100":[26,16],"101":[46,39,42],"102":[39,42],"103":[42,39],"104":[67],"105":[7],"106":[107],"108":[109],"110":[16],"111":[42,16],"112":[16,26],"113":[16],"114":[26,16],"115":[42],"116":[26,16],"117":[16],"118":[16],"119":[16],"21":[17],"27":[26,16],"120":[16],"20":[17],"121":[16],"45":[16],"23":[16],"122":[16],"123":[16],"124":[16],"125":[16],"126":[16],"127":[16],"128":[26,16],"129":[16],"130":[16],"131":[16],"132":[16],"133":[26,16],"134":[16],"135":[37],"136":[37],"38":[37],"137":[37],"138":[18],"139":[18],"140":[2],"141":[142]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.CircleCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MetaballParticleClass","UnityEngine.GameObject","UnityEngine.TrailRenderer","Liquid","UnityEngine.Texture2D","UnityEngine.RenderTexture","Water2D.PhysicsSimulation","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","UnityEngine.UI.HorizontalLayoutGroup","FaucetManager","Faucet","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.EventSystems.EventTrigger","Water2D.Water2D_Spawner","Glass","UnityEngine.EdgeCollider2D","UnityEngine.UI.Button","GameManager2","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshCollider","UnityEngine.MeshRenderer","ResizeQuadEffectController","UnityEngine.AudioListener","UnityEngine.UI.GridLayoutGroup","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Water2D.SpawnersManager","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Ice","UnityEngine.BoxCollider2D","Water2D.Extentions.ColliderFillerGizmos","Water2D.ColliderFiller","BezierCurve.BezierCollider2D","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer"]

Deserializers.unityVersion = "2021.3.28f1";

Deserializers.productName = "BobaApp";

Deserializers.lunaInitializationTime = "03/20/2023 02:44:34";

Deserializers.lunaDaysRunning = "160.2";

Deserializers.lunaVersion = "5.2.0";

Deserializers.lunaSHA = "a655a1e01be315dbfa8d2e1b74c75f56b0112281";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "13792";

Deserializers.projectId = "7a299087-6f8f-4237-a02e-07106cb1cecc";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1790";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4511";

Deserializers.runtimeAnalysisExcludedModules = "particle-system, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "a7393c5b-af5a-4cd1-9084-7049dabe6502";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

