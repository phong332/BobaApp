var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.JointSpring' )
  var i519 = data
  i518.spring = i519[0]
  i518.damper = i519[1]
  i518.targetPosition = i519[2]
  return i518
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.JointMotor' )
  var i521 = data
  i520.m_TargetVelocity = i521[0]
  i520.m_Force = i521[1]
  i520.m_FreeSpin = i521[2]
  return i520
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.JointLimits' )
  var i523 = data
  i522.m_Min = i523[0]
  i522.m_Max = i523[1]
  i522.m_Bounciness = i523[2]
  i522.m_BounceMinVelocity = i523[3]
  i522.m_ContactDistance = i523[4]
  i522.minBounce = i523[5]
  i522.maxBounce = i523[6]
  return i522
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointDrive' )
  var i525 = data
  i524.m_PositionSpring = i525[0]
  i524.m_PositionDamper = i525[1]
  i524.m_MaximumForce = i525[2]
  return i524
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i527 = data
  i526.m_Spring = i527[0]
  i526.m_Damper = i527[1]
  return i526
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i529 = data
  i528.m_Limit = i529[0]
  i528.m_Bounciness = i529[1]
  i528.m_ContactDistance = i529[2]
  return i528
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i531 = data
  i530.m_ExtremumSlip = i531[0]
  i530.m_ExtremumValue = i531[1]
  i530.m_AsymptoteSlip = i531[2]
  i530.m_AsymptoteValue = i531[3]
  i530.m_Stiffness = i531[4]
  return i530
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i533 = data
  i532.m_LowerAngle = i533[0]
  i532.m_UpperAngle = i533[1]
  return i532
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i535 = data
  i534.m_MotorSpeed = i535[0]
  i534.m_MaximumMotorTorque = i535[1]
  return i534
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i537 = data
  i536.m_DampingRatio = i537[0]
  i536.m_Frequency = i537[1]
  i536.m_Angle = i537[2]
  return i536
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i539 = data
  i538.m_LowerTranslation = i539[0]
  i538.m_UpperTranslation = i539[1]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i540 = root || new pc.UnityMaterial()
  var i541 = data
  i540.name = i541[0]
  request.r(i541[1], i541[2], 0, i540, 'shader')
  i540.renderQueue = i541[3]
  i540.enableInstancing = !!i541[4]
  var i543 = i541[5]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i543[i + 0]) );
  }
  i540.floatParameters = i542
  var i545 = i541[6]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i545[i + 0]) );
  }
  i540.colorParameters = i544
  var i547 = i541[7]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i547[i + 0]) );
  }
  i540.vectorParameters = i546
  var i549 = i541[8]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i549[i + 0]) );
  }
  i540.textureParameters = i548
  var i551 = i541[9]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i551[i + 0]) );
  }
  i540.materialFlags = i550
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i555 = data
  i554.name = i555[0]
  i554.value = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i559 = data
  i558.name = i559[0]
  i558.value = new pc.Color(i559[1], i559[2], i559[3], i559[4])
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i563 = data
  i562.name = i563[0]
  i562.value = new pc.Vec4( i563[1], i563[2], i563[3], i563[4] )
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i567 = data
  i566.name = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'value')
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i571 = data
  i570.name = i571[0]
  i570.enabled = !!i571[1]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i573 = data
  i572.name = i573[0]
  i572.width = i573[1]
  i572.height = i573[2]
  i572.mipmapCount = i573[3]
  i572.anisoLevel = i573[4]
  i572.filterMode = i573[5]
  i572.hdr = !!i573[6]
  i572.format = i573[7]
  i572.wrapMode = i573[8]
  i572.alphaIsTransparency = !!i573[9]
  i572.alphaSource = i573[10]
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i575 = data
  i574.position = new pc.Vec3( i575[0], i575[1], i575[2] )
  i574.scale = new pc.Vec3( i575[3], i575[4], i575[5] )
  i574.rotation = new pc.Quat(i575[6], i575[7], i575[8], i575[9])
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i577 = data
  i576.enabled = !!i577[0]
  request.r(i577[1], i577[2], 0, i576, 'sharedMaterial')
  var i579 = i577[3]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576.sharedMaterials = i578
  i576.receiveShadows = !!i577[4]
  i576.shadowCastingMode = i577[5]
  i576.sortingLayerID = i577[6]
  i576.sortingOrder = i577[7]
  i576.lightmapIndex = i577[8]
  i576.lightmapSceneIndex = i577[9]
  i576.lightmapScaleOffset = new pc.Vec4( i577[10], i577[11], i577[12], i577[13] )
  i576.lightProbeUsage = i577[14]
  i576.reflectionProbeUsage = i577[15]
  i576.color = new pc.Color(i577[16], i577[17], i577[18], i577[19])
  request.r(i577[20], i577[21], 0, i576, 'sprite')
  i576.flipX = !!i577[22]
  i576.flipY = !!i577[23]
  i576.drawMode = i577[24]
  i576.size = new pc.Vec2( i577[25], i577[26] )
  i576.tileMode = i577[27]
  i576.adaptiveModeThreshold = i577[28]
  i576.maskInteraction = i577[29]
  i576.spriteSortPoint = i577[30]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i583 = data
  i582.radius = i583[0]
  i582.enabled = !!i583[1]
  i582.isTrigger = !!i583[2]
  i582.usedByEffector = !!i583[3]
  i582.density = i583[4]
  i582.offset = new pc.Vec2( i583[5], i583[6] )
  request.r(i583[7], i583[8], 0, i582, 'material')
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i585 = data
  i584.bodyType = i585[0]
  request.r(i585[1], i585[2], 0, i584, 'material')
  i584.simulated = !!i585[3]
  i584.useAutoMass = !!i585[4]
  i584.mass = i585[5]
  i584.drag = i585[6]
  i584.angularDrag = i585[7]
  i584.gravityScale = i585[8]
  i584.collisionDetectionMode = i585[9]
  i584.sleepMode = i585[10]
  i584.constraints = i585[11]
  return i584
}

Deserializers["MetaballParticleClass"] = function (request, data, root) {
  var i586 = root || request.c( 'MetaballParticleClass' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'MObject')
  i586.LifeTime = i587[2]
  request.r(i587[3], i587[4], 0, i586, 'SpawnerParent')
  i586.witinTarget = !!i587[5]
  i586.Editor_Velocity = new pc.Vec2( i587[6], i587[7] )
  i586.Velocity_Limiter_X = new pc.Vec2( i587[8], i587[9] )
  i586.Velocity_Limiter_Y = new pc.Vec2( i587[10], i587[11] )
  i586.ScaleDown = !!i587[12]
  i586.endSize = i587[13]
  i586.BlendingColor = !!i587[14]
  request.r(i587[15], i587[16], 0, i586, 'glowSP')
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i589 = data
  i588.enabled = !!i589[0]
  request.r(i589[1], i589[2], 0, i588, 'sharedMaterial')
  var i591 = i589[3]
  var i590 = []
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 2, i590, '')
  }
  i588.sharedMaterials = i590
  i588.receiveShadows = !!i589[4]
  i588.shadowCastingMode = i589[5]
  i588.sortingLayerID = i589[6]
  i588.sortingOrder = i589[7]
  i588.lightmapIndex = i589[8]
  i588.lightmapSceneIndex = i589[9]
  i588.lightmapScaleOffset = new pc.Vec4( i589[10], i589[11], i589[12], i589[13] )
  i588.lightProbeUsage = i589[14]
  i588.reflectionProbeUsage = i589[15]
  var i593 = i589[16]
  var i592 = []
  for(var i = 0; i < i593.length; i += 3) {
    i592.push( new pc.Vec3( i593[i + 0], i593[i + 1], i593[i + 2] ) );
  }
  i588.positions = i592
  i588.positionCount = i589[17]
  i588.time = i589[18]
  i588.startWidth = i589[19]
  i588.endWidth = i589[20]
  i588.widthMultiplier = i589[21]
  i588.autodestruct = !!i589[22]
  i588.emitting = !!i589[23]
  i588.numCornerVertices = i589[24]
  i588.numCapVertices = i589[25]
  i588.minVertexDistance = i589[26]
  i588.colorGradient = i589[27] ? new pc.ColorGradient(i589[27][0], i589[27][1], i589[27][2]) : null
  i588.startColor = new pc.Color(i589[28], i589[29], i589[30], i589[31])
  i588.endColor = new pc.Color(i589[32], i589[33], i589[34], i589[35])
  i588.generateLightingData = !!i589[36]
  i588.textureMode = i589[37]
  i588.alignment = i589[38]
  i588.widthCurve = new pc.AnimationCurve( { keys_flow: i589[39] } )
  return i588
}

Deserializers["Liquid"] = function (request, data, root) {
  var i596 = root || request.c( 'Liquid' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'collider2d')
  request.r(i597[2], i597[3], 0, i596, 'collider2dLiquid')
  request.r(i597[4], i597[5], 0, i596, 'metaballParticleClass')
  request.r(i597[6], i597[7], 0, i596, 'rb')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i599 = data
  i598.name = i599[0]
  i598.tagId = i599[1]
  i598.enabled = !!i599[2]
  i598.isStatic = !!i599[3]
  i598.layer = i599[4]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i601 = data
  i600.name = i601[0]
  i600.halfPrecision = !!i601[1]
  i600.vertexCount = i601[2]
  i600.aabb = i601[3]
  var i603 = i601[4]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( !!i603[i + 0] );
  }
  i600.streams = i602
  i600.vertices = i601[5]
  var i605 = i601[6]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i605[i + 0]) );
  }
  i600.subMeshes = i604
  var i607 = i601[7]
  var i606 = []
  for(var i = 0; i < i607.length; i += 16) {
    i606.push( new pc.Mat4().setData(i607[i + 0], i607[i + 1], i607[i + 2], i607[i + 3],  i607[i + 4], i607[i + 5], i607[i + 6], i607[i + 7],  i607[i + 8], i607[i + 9], i607[i + 10], i607[i + 11],  i607[i + 12], i607[i + 13], i607[i + 14], i607[i + 15]) );
  }
  i600.bindposes = i606
  var i609 = i601[8]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i609[i + 0]) );
  }
  i600.blendShapes = i608
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i615 = data
  i614.triangles = i615[0]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i621 = data
  i620.name = i621[0]
  var i623 = i621[1]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i623[i + 0]) );
  }
  i620.frames = i622
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i625 = data
  i624.name = i625[0]
  i624.width = i625[1]
  i624.height = i625[2]
  i624.anisoLevel = i625[3]
  i624.filterMode = i625[4]
  i624.hdr = !!i625[5]
  i624.format = i625[6]
  i624.wrapMode = i625[7]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i627 = data
  i626.name = i627[0]
  i626.atlasId = i627[1]
  i626.mipmapCount = i627[2]
  i626.hdr = !!i627[3]
  i626.size = i627[4]
  i626.anisoLevel = i627[5]
  i626.filterMode = i627[6]
  i626.wrapMode = i627[7]
  var i629 = i627[8]
  var i628 = []
  for(var i = 0; i < i629.length; i += 4) {
    i628.push( UnityEngine.Rect.MinMaxRect(i629[i + 0], i629[i + 1], i629[i + 2], i629[i + 3]) );
  }
  i626.rects = i628
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i633 = data
  i632.name = i633[0]
  i632.index = i633[1]
  i632.startup = !!i633[2]
  return i632
}

Deserializers["Water2D.PhysicsSimulation"] = function (request, data, root) {
  var i634 = root || request.c( 'Water2D.PhysicsSimulation' )
  var i635 = data
  i634.Simulate = !!i635[0]
  var i637 = i635[1]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rigidbody2D')))
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 1, i636, '')
  }
  i634.RBAltered = i636
  i634.alreadyCreated = !!i635[2]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i641 = data
  i640.pivot = new pc.Vec2( i641[0], i641[1] )
  i640.anchorMin = new pc.Vec2( i641[2], i641[3] )
  i640.anchorMax = new pc.Vec2( i641[4], i641[5] )
  i640.sizeDelta = new pc.Vec2( i641[6], i641[7] )
  i640.anchoredPosition3D = new pc.Vec3( i641[8], i641[9], i641[10] )
  i640.rotation = new pc.Quat(i641[11], i641[12], i641[13], i641[14])
  i640.scale = new pc.Vec3( i641[15], i641[16], i641[17] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i643 = data
  i642.enabled = !!i643[0]
  i642.planeDistance = i643[1]
  i642.referencePixelsPerUnit = i643[2]
  i642.isFallbackOverlay = !!i643[3]
  i642.renderMode = i643[4]
  i642.renderOrder = i643[5]
  i642.sortingLayerName = i643[6]
  i642.sortingOrder = i643[7]
  i642.scaleFactor = i643[8]
  request.r(i643[9], i643[10], 0, i642, 'worldCamera')
  i642.overrideSorting = !!i643[11]
  i642.pixelPerfect = !!i643[12]
  i642.targetDisplay = i643[13]
  i642.overridePixelPerfect = !!i643[14]
  return i642
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i645 = data
  i644.m_UiScaleMode = i645[0]
  i644.m_ReferencePixelsPerUnit = i645[1]
  i644.m_ScaleFactor = i645[2]
  i644.m_ReferenceResolution = new pc.Vec2( i645[3], i645[4] )
  i644.m_ScreenMatchMode = i645[5]
  i644.m_MatchWidthOrHeight = i645[6]
  i644.m_PhysicalUnit = i645[7]
  i644.m_FallbackScreenDPI = i645[8]
  i644.m_DefaultSpriteDPI = i645[9]
  i644.m_DynamicPixelsPerUnit = i645[10]
  i644.m_PresetInfoIsWorld = !!i645[11]
  return i644
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i647 = data
  i646.m_IgnoreReversedGraphics = !!i647[0]
  i646.m_BlockingObjects = i647[1]
  i646.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i647[2] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i649 = data
  i648.m_Alpha = i649[0]
  i648.m_Interactable = !!i649[1]
  i648.m_BlocksRaycasts = !!i649[2]
  i648.m_IgnoreParentGroups = !!i649[3]
  i648.enabled = !!i649[4]
  return i648
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i651 = data
  i650.m_Spacing = i651[0]
  i650.m_ChildForceExpandWidth = !!i651[1]
  i650.m_ChildForceExpandHeight = !!i651[2]
  i650.m_ChildControlWidth = !!i651[3]
  i650.m_ChildControlHeight = !!i651[4]
  i650.m_ChildScaleWidth = !!i651[5]
  i650.m_ChildScaleHeight = !!i651[6]
  i650.m_ReverseArrangement = !!i651[7]
  i650.m_Padding = UnityEngine.RectOffset.FromPaddings(i651[8], i651[9], i651[10], i651[11])
  i650.m_ChildAlignment = i651[12]
  return i650
}

Deserializers["FaucetManager"] = function (request, data, root) {
  var i652 = root || request.c( 'FaucetManager' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, '<CanvasGroup>k__BackingField')
  request.r(i653[2], i653[3], 0, i652, 'faucetPrefab')
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i655 = data
  i654.cullTransparentMesh = !!i655[0]
  return i654
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.Image' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'm_Sprite')
  i656.m_Type = i657[2]
  i656.m_PreserveAspect = !!i657[3]
  i656.m_FillCenter = !!i657[4]
  i656.m_FillMethod = i657[5]
  i656.m_FillAmount = i657[6]
  i656.m_FillClockwise = !!i657[7]
  i656.m_FillOrigin = i657[8]
  i656.m_UseSpriteMesh = !!i657[9]
  i656.m_PixelsPerUnitMultiplier = i657[10]
  request.r(i657[11], i657[12], 0, i656, 'm_Material')
  i656.m_Maskable = !!i657[13]
  i656.m_Color = new pc.Color(i657[14], i657[15], i657[16], i657[17])
  i656.m_RaycastTarget = !!i657[18]
  i656.m_RaycastPadding = new pc.Vec4( i657[19], i657[20], i657[21], i657[22] )
  return i656
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i659 = data
  var i661 = i659[0]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i661.length; i += 1) {
    i660.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i661[i + 0]));
  }
  i658.m_Delegates = i660
  return i658
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i665 = data
  i664.eventID = i665[0]
  i664.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i665[1], i664.callback)
  return i664
}

Deserializers["Faucet"] = function (request, data, root) {
  var i666 = root || request.c( 'Faucet' )
  var i667 = data
  i666.color = new pc.Color(i667[0], i667[1], i667[2], i667[3])
  request.r(i667[4], i667[5], 0, i666, 'image')
  request.r(i667[6], i667[7], 0, i666, 'spawner')
  request.r(i667[8], i667[9], 0, i666, 'eventTrigger')
  return i666
}

Deserializers["Water2D.Water2D_Spawner"] = function (request, data, root) {
  var i668 = root || request.c( 'Water2D.Water2D_Spawner' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'instance')
  i668.HashID = i669[2]
  i668.Water2DType = i669[3]
  i668.Water2DEmissionType = i669[4]
  i668.Water2DFillerType = i669[5]
  i668.FillerColliderMasked = !!i669[6]
  i668.Water2DRenderType = i669[7]
  i668.Water2DVersion = i669[8]
  request.r(i669[9], i669[10], 0, i668, 'DropObject')
  var i671 = i669[11]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i668.WaterDropsObjects = i670
  i668.ParticlesTag = i669[12]
  i668.PersistentFluid = !!i669[13]
  i668.size = i669[14]
  i668.ScaleDown = !!i669[15]
  i668.LifeTime = i669[16]
  i668.DelayBetweenParticles = i669[17]
  i668.TrailStartSize = i669[18]
  i668.TrailEndSize = i669[19]
  i668.TrailDelay = i669[20]
  request.r(i669[21], i669[22], 0, i668, 'WaterMaterial')
  i668.StyleByID = !!i669[23]
  i668.Sorting = i669[24]
  i668.ColorScheme = i669[25]
  i668.FillColor = new pc.Color(i669[26], i669[27], i669[28], i669[29])
  i668.StrokeColor = new pc.Color(i669[30], i669[31], i669[32], i669[33])
  i668._lastStrokeColor = new pc.Color(i669[34], i669[35], i669[36], i669[37])
  i668.Blending = !!i669[38]
  i668._lastBlending = !!i669[39]
  i668.AlphaCutOff = i669[40]
  i668.AlphaStroke = i669[41]
  i668.TintColor = new pc.Color(i669[42], i669[43], i669[44], i669[45])
  i668.Intensity = i669[46]
  i668.LensMag = i669[47]
  i668.Distortion = i669[48]
  i668.DistortionSpeed = i669[49]
  i668.GlowEffect = !!i669[50]
  i668.GlowColor = new pc.Color(i669[51], i669[52], i669[53], i669[54])
  i668.GlowSize = i669[55]
  i668.GlowSortingOrder = i669[56]
  i668.initSpeed = new pc.Vec2( i669[57], i669[58] )
  i668.Speed = i669[59]
  request.r(i669[60], i669[61], 0, i668, 'PhysicMat')
  i668.ColliderSize = i669[62]
  i668.LinearDrag = i669[63]
  i668.AngularDrag = i669[64]
  i668.GravityScale = i669[65]
  i668.FreezeRotation = !!i669[66]
  i668.SpeedLimiterX = new pc.Vec2( i669[67], i669[68] )
  i668.SpeedLimiterY = new pc.Vec2( i669[69], i669[70] )
  i668.SimulateOnAwake = !!i669[71]
  i668.SimulateInEditor = !!i669[72]
  i668.SimulateInPlayMode = !!i669[73]
  i668.DropCount = i669[74]
  i668._lastDropCount = i669[75]
  i668.Loop = !!i669[76]
  i668.DropsUsed = i669[77]
  i668.DynamicChanges = !!i669[78]
  i668.OnValidateShapeFill = request.d('Water2D.Water2DEvents', i669[79], i668.OnValidateShapeFill)
  var i673 = i669[80]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i668.ShapeFillCollider2D = i672
  i668.ShapeFillCollider2DCount = i669[81]
  i668.ShapeFillAccuracy = i669[82]
  i668.OnCollisionEnterList = request.d('Water2D.Water2DEvents', i669[83], i668.OnCollisionEnterList)
  i668.OnSpawnerAboutStart = request.d('Water2D.Water2DEvents', i669[84], i668.OnSpawnerAboutStart)
  i668.OnSpawnerAboutEnd = request.d('Water2D.Water2DEvents', i669[85], i668.OnSpawnerAboutEnd)
  i668.OnSpawnerEmitingParticle = request.d('Water2D.Water2DEvents', i669[86], i668.OnSpawnerEmitingParticle)
  i668.isRefractingMaterial = !!i669[87]
  i668._lastGlowEnabledValue = !!i669[88]
  return i668
}

Deserializers["Water2D.Water2DEvents"] = function (request, data, root) {
  var i676 = root || request.c( 'Water2D.Water2DEvents' )
  var i677 = data
  i676.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i677[0], i676.m_PersistentCalls)
  return i676
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i679 = data
  var i681 = i679[0]
  var i680 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i681.length; i += 1) {
    i680.add(request.d('UnityEngine.Events.PersistentCall', i681[i + 0]));
  }
  i678.m_Calls = i680
  return i678
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'm_Target')
  i684.m_TargetAssemblyTypeName = i685[2]
  i684.m_MethodName = i685[3]
  i684.m_Mode = i685[4]
  i684.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i685[5], i684.m_Arguments)
  i684.m_CallState = i685[6]
  return i684
}

Deserializers["Glass"] = function (request, data, root) {
  var i688 = root || request.c( 'Glass' )
  var i689 = data
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i691 = data
  i690.enabled = !!i691[0]
  i690.isTrigger = !!i691[1]
  i690.usedByEffector = !!i691[2]
  i690.density = i691[3]
  i690.offset = new pc.Vec2( i691[4], i691[5] )
  request.r(i691[6], i691[7], 0, i690, 'material')
  i690.edgeRadius = i691[8]
  var i693 = i691[9]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
    i692.push( new pc.Vec2( i693[i + 0], i693[i + 1] ) );
  }
  i690.points = i692
  i690.useAdjacentStartPoint = !!i691[10]
  i690.adjacentStartPoint = new pc.Vec2( i691[11], i691[12] )
  i690.useAdjacentEndPoint = !!i691[13]
  i690.adjacentEndPoint = new pc.Vec2( i691[14], i691[15] )
  return i690
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.Button' )
  var i697 = data
  i696.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i697[0], i696.m_OnClick)
  i696.m_Navigation = request.d('UnityEngine.UI.Navigation', i697[1], i696.m_Navigation)
  i696.m_Transition = i697[2]
  i696.m_Colors = request.d('UnityEngine.UI.ColorBlock', i697[3], i696.m_Colors)
  i696.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i697[4], i696.m_SpriteState)
  i696.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i697[5], i696.m_AnimationTriggers)
  i696.m_Interactable = !!i697[6]
  request.r(i697[7], i697[8], 0, i696, 'm_TargetGraphic')
  return i696
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i699 = data
  i698.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i699[0], i698.m_PersistentCalls)
  return i698
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_ObjectArgument')
  i700.m_ObjectArgumentAssemblyTypeName = i701[2]
  i700.m_IntArgument = i701[3]
  i700.m_FloatArgument = i701[4]
  i700.m_StringArgument = i701[5]
  i700.m_BoolArgument = !!i701[6]
  return i700
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i703 = data
  i702.m_Mode = i703[0]
  i702.m_WrapAround = !!i703[1]
  request.r(i703[2], i703[3], 0, i702, 'm_SelectOnUp')
  request.r(i703[4], i703[5], 0, i702, 'm_SelectOnDown')
  request.r(i703[6], i703[7], 0, i702, 'm_SelectOnLeft')
  request.r(i703[8], i703[9], 0, i702, 'm_SelectOnRight')
  return i702
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i705 = data
  i704.m_NormalColor = new pc.Color(i705[0], i705[1], i705[2], i705[3])
  i704.m_HighlightedColor = new pc.Color(i705[4], i705[5], i705[6], i705[7])
  i704.m_PressedColor = new pc.Color(i705[8], i705[9], i705[10], i705[11])
  i704.m_SelectedColor = new pc.Color(i705[12], i705[13], i705[14], i705[15])
  i704.m_DisabledColor = new pc.Color(i705[16], i705[17], i705[18], i705[19])
  i704.m_ColorMultiplier = i705[20]
  i704.m_FadeDuration = i705[21]
  return i704
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i707 = data
  request.r(i707[0], i707[1], 0, i706, 'm_HighlightedSprite')
  request.r(i707[2], i707[3], 0, i706, 'm_PressedSprite')
  request.r(i707[4], i707[5], 0, i706, 'm_SelectedSprite')
  request.r(i707[6], i707[7], 0, i706, 'm_DisabledSprite')
  return i706
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i709 = data
  i708.m_NormalTrigger = i709[0]
  i708.m_HighlightedTrigger = i709[1]
  i708.m_PressedTrigger = i709[2]
  i708.m_SelectedTrigger = i709[3]
  i708.m_DisabledTrigger = i709[4]
  return i708
}

Deserializers["GameManager2"] = function (request, data, root) {
  var i710 = root || request.c( 'GameManager2' )
  var i711 = data
  var i713 = i711[0]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('Faucet')))
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 1, i712, '')
  }
  i710.lstFaucet = i712
  return i710
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i716 = root || request.c( 'SoundManager' )
  var i717 = data
  var i719 = i717[0]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('AudioConfig')))
  for(var i = 0; i < i719.length; i += 1) {
    i718.add(request.d('AudioConfig', i719[i + 0]));
  }
  i716.audioConfigs = i718
  request.r(i717[1], i717[2], 0, i716, 'pouring')
  return i716
}

Deserializers["AudioConfig"] = function (request, data, root) {
  var i722 = root || request.c( 'AudioConfig' )
  var i723 = data
  i722.keySound = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'clip')
  request.r(i723[3], i723[4], 0, i722, 'audioSource')
  i722.volume = i723[5]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'clip')
  request.r(i725[2], i725[3], 0, i724, 'outputAudioMixerGroup')
  i724.playOnAwake = !!i725[4]
  i724.loop = !!i725[5]
  i724.time = i725[6]
  i724.volume = i725[7]
  i724.pitch = i725[8]
  i724.enabled = !!i725[9]
  return i724
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_FirstSelected')
  i726.m_sendNavigationEvents = !!i727[2]
  i726.m_DragThreshold = i727[3]
  return i726
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i729 = data
  i728.m_HorizontalAxis = i729[0]
  i728.m_VerticalAxis = i729[1]
  i728.m_SubmitButton = i729[2]
  i728.m_CancelButton = i729[3]
  i728.m_InputActionsPerSecond = i729[4]
  i728.m_RepeatDelay = i729[5]
  i728.m_ForceModuleActive = !!i729[6]
  i728.m_SendPointerHoverToParent = !!i729[7]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i731 = data
  i730.enabled = !!i731[0]
  i730.aspect = i731[1]
  i730.orthographic = !!i731[2]
  i730.orthographicSize = i731[3]
  i730.backgroundColor = new pc.Color(i731[4], i731[5], i731[6], i731[7])
  i730.nearClipPlane = i731[8]
  i730.farClipPlane = i731[9]
  i730.fieldOfView = i731[10]
  i730.depth = i731[11]
  i730.clearFlags = i731[12]
  i730.cullingMask = i731[13]
  i730.rect = i731[14]
  request.r(i731[15], i731[16], 0, i730, 'targetTexture')
  i730.usePhysicalProperties = !!i731[17]
  i730.focalLength = i731[18]
  i730.sensorSize = new pc.Vec2( i731[19], i731[20] )
  i730.lensShift = new pc.Vec2( i731[21], i731[22] )
  i730.gateFit = i731[23]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'sharedMesh')
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i735 = data
  i734.enabled = !!i735[0]
  i734.isTrigger = !!i735[1]
  request.r(i735[2], i735[3], 0, i734, 'material')
  request.r(i735[4], i735[5], 0, i734, 'sharedMesh')
  i734.convex = !!i735[6]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'additionalVertexStreams')
  i736.enabled = !!i737[2]
  request.r(i737[3], i737[4], 0, i736, 'sharedMaterial')
  var i739 = i737[5]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i736.sharedMaterials = i738
  i736.receiveShadows = !!i737[6]
  i736.shadowCastingMode = i737[7]
  i736.sortingLayerID = i737[8]
  i736.sortingOrder = i737[9]
  i736.lightmapIndex = i737[10]
  i736.lightmapSceneIndex = i737[11]
  i736.lightmapScaleOffset = new pc.Vec4( i737[12], i737[13], i737[14], i737[15] )
  i736.lightProbeUsage = i737[16]
  i736.reflectionProbeUsage = i737[17]
  return i736
}

Deserializers["ResizeQuadEffectController"] = function (request, data, root) {
  var i740 = root || request.c( 'ResizeQuadEffectController' )
  var i741 = data
  i740.FlipTexture = !!i741[0]
  i740.sorting = i741[1]
  i740.isHorizontalScreen = !!i741[2]
  return i740
}

Deserializers["Water2D.SpawnersManager"] = function (request, data, root) {
  var i742 = root || request.c( 'Water2D.SpawnersManager' )
  var i743 = data
  var i745 = i743[0]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(i745[i + 0]);
  }
  i742.spawnersID = i744
  var i747 = i743[1]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Color')))
  for(var i = 0; i < i747.length; i += 4) {
    i746.add(new pc.Color(i747[i + 0], i747[i + 1], i747[i + 2], i747[i + 3]));
  }
  i742.FillColorByID = i746
  var i749 = i743[2]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i749.length; i += 1) {
    i748.add(i749[i + 0]);
  }
  i742.CuttOffByID = i748
  var i751 = i743[3]
  var i750 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i751.length; i += 1) {
    i750.add(i751[i + 0]);
  }
  i742.MultiplierByID = i750
  var i753 = i743[4]
  var i752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Color')))
  for(var i = 0; i < i753.length; i += 4) {
    i752.add(new pc.Color(i753[i + 0], i753[i + 1], i753[i + 2], i753[i + 3]));
  }
  i742.FresnelColorByID = i752
  var i755 = i743[5]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(i755[i + 0]);
  }
  i742.StyleByID = i754
  var i757 = i743[6]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i757.length; i += 1) {
    i756.add(i757[i + 0]);
  }
  i742.LensSizeByID = i756
  var i759 = i743[7]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(i759[i + 0]);
  }
  i742.MagnitudeByID = i758
  var i761 = i743[8]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('System.Single')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(i761[i + 0]);
  }
  i742.SpeedByID = i760
  var i763 = i743[9]
  var i762 = []
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 2, i762, '')
  }
  i742._allparticles = i762
  i742.forceToClearColorBuffers = !!i743[10]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i773 = data
  i772.ambientIntensity = i773[0]
  i772.reflectionIntensity = i773[1]
  i772.ambientMode = i773[2]
  i772.ambientLight = new pc.Color(i773[3], i773[4], i773[5], i773[6])
  i772.ambientSkyColor = new pc.Color(i773[7], i773[8], i773[9], i773[10])
  i772.ambientGroundColor = new pc.Color(i773[11], i773[12], i773[13], i773[14])
  i772.ambientEquatorColor = new pc.Color(i773[15], i773[16], i773[17], i773[18])
  i772.fogColor = new pc.Color(i773[19], i773[20], i773[21], i773[22])
  i772.fogEndDistance = i773[23]
  i772.fogStartDistance = i773[24]
  i772.fogDensity = i773[25]
  i772.fog = !!i773[26]
  request.r(i773[27], i773[28], 0, i772, 'skybox')
  i772.fogMode = i773[29]
  var i775 = i773[30]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i775[i + 0]) );
  }
  i772.lightmaps = i774
  i772.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i773[31], i772.lightProbes)
  i772.lightmapsMode = i773[32]
  i772.mixedBakeMode = i773[33]
  i772.environmentLightingMode = i773[34]
  i772.ambientProbe = new pc.SphericalHarmonicsL2(i773[35])
  i772.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i773[36])
  i772.useReferenceAmbientProbe = !!i773[37]
  request.r(i773[38], i773[39], 0, i772, 'customReflection')
  request.r(i773[40], i773[41], 0, i772, 'defaultReflection')
  i772.defaultReflectionMode = i773[42]
  i772.defaultReflectionResolution = i773[43]
  i772.sunLightObjectId = i773[44]
  i772.pixelLightCount = i773[45]
  i772.defaultReflectionHDR = !!i773[46]
  i772.hasLightDataAsset = !!i773[47]
  i772.hasManualGenerate = !!i773[48]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'lightmapColor')
  request.r(i779[2], i779[3], 0, i778, 'lightmapDirection')
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i780 = root || new UnityEngine.LightProbes()
  var i781 = data
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i787 = data
  i786.name = i787[0]
  i786.bounciness = i787[1]
  i786.friction = i787[2]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i789 = data
  var i791 = i789[0]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(i791[i + 0]);
  }
  i788.invalidShaderVariants = i790
  i788.name = i789[1]
  i788.guid = i789[2]
  var i793 = i789[3]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( i793[i + 0] );
  }
  i788.shaderDefinedKeywords = i792
  var i795 = i789[4]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i795[i + 0]) );
  }
  i788.passes = i794
  var i797 = i789[5]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i797[i + 0]) );
  }
  i788.usePasses = i796
  var i799 = i789[6]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i799[i + 0]) );
  }
  i788.defaultParameterValues = i798
  request.r(i789[7], i789[8], 0, i788, 'unityFallbackShader')
  i788.readDepth = !!i789[9]
  i788.isCreatedByShaderGraph = !!i789[10]
  i788.usedBatchUniforms = i789[11]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i806 = root || new pc.UnityShaderPass()
  var i807 = data
  i806.id = i807[0]
  i806.subShaderIndex = i807[1]
  i806.name = i807[2]
  i806.passType = i807[3]
  i806.usePass = !!i807[4]
  i806.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[5], i806.zTest)
  i806.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[6], i806.zWrite)
  i806.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[7], i806.culling)
  i806.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i807[8], i806.blending)
  i806.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i807[9], i806.alphaBlending)
  i806.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[10], i806.colorWriteMask)
  i806.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[11], i806.offsetUnits)
  i806.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[12], i806.offsetFactor)
  i806.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[13], i806.stencilRef)
  i806.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[14], i806.stencilReadMask)
  i806.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[15], i806.stencilWriteMask)
  i806.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i807[16], i806.stencilOp)
  i806.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i807[17], i806.stencilOpFront)
  i806.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i807[18], i806.stencilOpBack)
  var i809 = i807[19]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i809[i + 0]) );
  }
  i806.tags = i808
  var i811 = i807[20]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i806.passDefinedKeywords = i810
  var i813 = i807[21]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i813[i + 0]) );
  }
  i806.passDefinedKeywordGroups = i812
  var i815 = i807[22]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i815[i + 0]) );
  }
  i806.variants = i814
  var i817 = i807[23]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i817[i + 0]) );
  }
  i806.excludedVariants = i816
  i806.hasDepthReader = !!i807[24]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i819 = data
  i818.val = i819[0]
  i818.name = i819[1]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i821 = data
  i820.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i821[0], i820.src)
  i820.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i821[1], i820.dst)
  i820.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i821[2], i820.op)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i823 = data
  i822.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[0], i822.pass)
  i822.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[1], i822.fail)
  i822.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[2], i822.zFail)
  i822.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[3], i822.comp)
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i827 = data
  i826.name = i827[0]
  i826.value = i827[1]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i831 = data
  var i833 = i831[0]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i830.keywords = i832
  i830.hasDiscard = !!i831[1]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i837 = data
  i836.passId = i837[0]
  i836.subShaderIndex = i837[1]
  var i839 = i837[2]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i836.keywords = i838
  i836.vertexProgram = i837[3]
  i836.fragmentProgram = i837[4]
  i836.readDepth = !!i837[5]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'shader')
  i842.pass = i843[2]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i847 = data
  i846.name = i847[0]
  i846.type = i847[1]
  i846.value = new pc.Vec4( i847[2], i847[3], i847[4], i847[5] )
  i846.textureValue = i847[6]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i849 = data
  i848.name = i849[0]
  request.r(i849[1], i849[2], 0, i848, 'texture')
  i848.aabb = i849[3]
  i848.vertices = i849[4]
  i848.triangles = i849[5]
  i848.textureRect = UnityEngine.Rect.MinMaxRect(i849[6], i849[7], i849[8], i849[9])
  i848.packedRect = UnityEngine.Rect.MinMaxRect(i849[10], i849[11], i849[12], i849[13])
  i848.border = new pc.Vec4( i849[14], i849[15], i849[16], i849[17] )
  i848.transparency = i849[18]
  i848.bounds = i849[19]
  i848.pixelsPerUnit = i849[20]
  i848.textureWidth = i849[21]
  i848.textureHeight = i849[22]
  i848.nativeSize = new pc.Vec2( i849[23], i849[24] )
  i848.pivot = new pc.Vec2( i849[25], i849[26] )
  i848.textureRectOffset = new pc.Vec2( i849[27], i849[28] )
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i851 = data
  i850.name = i851[0]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i853 = data
  i852.name = i853[0]
  i852.ascent = i853[1]
  i852.originalLineHeight = i853[2]
  i852.fontSize = i853[3]
  var i855 = i853[4]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i855[i + 0]) );
  }
  i852.characterInfo = i854
  request.r(i853[5], i853[6], 0, i852, 'texture')
  i852.originalFontSize = i853[7]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i859 = data
  i858.index = i859[0]
  i858.advance = i859[1]
  i858.bearing = i859[2]
  i858.glyphWidth = i859[3]
  i858.glyphHeight = i859[4]
  i858.minX = i859[5]
  i858.maxX = i859[6]
  i858.minY = i859[7]
  i858.maxY = i859[8]
  i858.uvBottomLeftX = i859[9]
  i858.uvBottomLeftY = i859[10]
  i858.uvBottomRightX = i859[11]
  i858.uvBottomRightY = i859[12]
  i858.uvTopLeftX = i859[13]
  i858.uvTopLeftY = i859[14]
  i858.uvTopRightX = i859[15]
  i858.uvTopRightY = i859[16]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i861 = data
  i860.name = i861[0]
  i860.bytes64 = i861[1]
  i860.data = i861[2]
  return i860
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TMP_Settings' )
  var i863 = data
  i862.m_enableWordWrapping = !!i863[0]
  i862.m_enableKerning = !!i863[1]
  i862.m_enableExtraPadding = !!i863[2]
  i862.m_enableTintAllSprites = !!i863[3]
  i862.m_enableParseEscapeCharacters = !!i863[4]
  i862.m_EnableRaycastTarget = !!i863[5]
  i862.m_GetFontFeaturesAtRuntime = !!i863[6]
  i862.m_missingGlyphCharacter = i863[7]
  i862.m_warningsDisabled = !!i863[8]
  request.r(i863[9], i863[10], 0, i862, 'm_defaultFontAsset')
  i862.m_defaultFontAssetPath = i863[11]
  i862.m_defaultFontSize = i863[12]
  i862.m_defaultAutoSizeMinRatio = i863[13]
  i862.m_defaultAutoSizeMaxRatio = i863[14]
  i862.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i863[15], i863[16] )
  i862.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i863[17], i863[18] )
  i862.m_autoSizeTextContainer = !!i863[19]
  i862.m_IsTextObjectScaleStatic = !!i863[20]
  var i865 = i863[21]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 1, i864, '')
  }
  i862.m_fallbackFontAssets = i864
  i862.m_matchMaterialPreset = !!i863[22]
  request.r(i863[23], i863[24], 0, i862, 'm_defaultSpriteAsset')
  i862.m_defaultSpriteAssetPath = i863[25]
  i862.m_enableEmojiSupport = !!i863[26]
  i862.m_MissingCharacterSpriteUnicode = i863[27]
  i862.m_defaultColorGradientPresetsPath = i863[28]
  request.r(i863[29], i863[30], 0, i862, 'm_defaultStyleSheet')
  i862.m_StyleSheetsResourcePath = i863[31]
  request.r(i863[32], i863[33], 0, i862, 'm_leadingCharacters')
  request.r(i863[34], i863[35], 0, i862, 'm_followingCharacters')
  i862.m_UseModernHangulLineBreakingRules = !!i863[36]
  return i862
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i869 = data
  i868.hashCode = i869[0]
  request.r(i869[1], i869[2], 0, i868, 'material')
  i868.materialHashCode = i869[3]
  request.r(i869[4], i869[5], 0, i868, 'atlas')
  i868.normalStyle = i869[6]
  i868.normalSpacingOffset = i869[7]
  i868.boldStyle = i869[8]
  i868.boldSpacing = i869[9]
  i868.italicStyle = i869[10]
  i868.tabSize = i869[11]
  i868.m_Version = i869[12]
  i868.m_SourceFontFileGUID = i869[13]
  request.r(i869[14], i869[15], 0, i868, 'm_SourceFontFile_EditorRef')
  request.r(i869[16], i869[17], 0, i868, 'm_SourceFontFile')
  i868.m_AtlasPopulationMode = i869[18]
  i868.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i869[19], i868.m_FaceInfo)
  var i871 = i869[20]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('UnityEngine.TextCore.Glyph', i871[i + 0]));
  }
  i868.m_GlyphTable = i870
  var i873 = i869[21]
  var i872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i873.length; i += 1) {
    i872.add(request.d('TMPro.TMP_Character', i873[i + 0]));
  }
  i868.m_CharacterTable = i872
  var i875 = i869[22]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i868.m_AtlasTextures = i874
  i868.m_AtlasTextureIndex = i869[23]
  i868.m_IsMultiAtlasTexturesEnabled = !!i869[24]
  i868.m_ClearDynamicDataOnBuild = !!i869[25]
  var i877 = i869[26]
  var i876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i877.length; i += 1) {
    i876.add(request.d('UnityEngine.TextCore.GlyphRect', i877[i + 0]));
  }
  i868.m_UsedGlyphRects = i876
  var i879 = i869[27]
  var i878 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i879.length; i += 1) {
    i878.add(request.d('UnityEngine.TextCore.GlyphRect', i879[i + 0]));
  }
  i868.m_FreeGlyphRects = i878
  i868.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i869[28], i868.m_fontInfo)
  i868.m_AtlasWidth = i869[29]
  i868.m_AtlasHeight = i869[30]
  i868.m_AtlasPadding = i869[31]
  i868.m_AtlasRenderMode = i869[32]
  var i881 = i869[33]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i881.length; i += 1) {
    i880.add(request.d('TMPro.TMP_Glyph', i881[i + 0]));
  }
  i868.m_glyphInfoList = i880
  i868.m_KerningTable = request.d('TMPro.KerningTable', i869[34], i868.m_KerningTable)
  i868.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i869[35], i868.m_FontFeatureTable)
  var i883 = i869[36]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i868.fallbackFontAssets = i882
  var i885 = i869[37]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 1, i884, '')
  }
  i868.m_FallbackFontAssetTable = i884
  i868.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i869[38], i868.m_CreationSettings)
  var i887 = i869[39]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('TMPro.TMP_FontWeightPair', i887[i + 0]) );
  }
  i868.m_FontWeightTable = i886
  var i889 = i869[40]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('TMPro.TMP_FontWeightPair', i889[i + 0]) );
  }
  i868.fontWeights = i888
  return i868
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i891 = data
  i890.m_FaceIndex = i891[0]
  i890.m_FamilyName = i891[1]
  i890.m_StyleName = i891[2]
  i890.m_PointSize = i891[3]
  i890.m_Scale = i891[4]
  i890.m_UnitsPerEM = i891[5]
  i890.m_LineHeight = i891[6]
  i890.m_AscentLine = i891[7]
  i890.m_CapLine = i891[8]
  i890.m_MeanLine = i891[9]
  i890.m_Baseline = i891[10]
  i890.m_DescentLine = i891[11]
  i890.m_SuperscriptOffset = i891[12]
  i890.m_SuperscriptSize = i891[13]
  i890.m_SubscriptOffset = i891[14]
  i890.m_SubscriptSize = i891[15]
  i890.m_UnderlineOffset = i891[16]
  i890.m_UnderlineThickness = i891[17]
  i890.m_StrikethroughOffset = i891[18]
  i890.m_StrikethroughThickness = i891[19]
  i890.m_TabWidth = i891[20]
  return i890
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i895 = data
  i894.m_Index = i895[0]
  i894.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i895[1], i894.m_Metrics)
  i894.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i895[2], i894.m_GlyphRect)
  i894.m_Scale = i895[3]
  i894.m_AtlasIndex = i895[4]
  i894.m_ClassDefinitionType = i895[5]
  return i894
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i897 = data
  i896.m_Width = i897[0]
  i896.m_Height = i897[1]
  i896.m_HorizontalBearingX = i897[2]
  i896.m_HorizontalBearingY = i897[3]
  i896.m_HorizontalAdvance = i897[4]
  return i896
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i899 = data
  i898.m_X = i899[0]
  i898.m_Y = i899[1]
  i898.m_Width = i899[2]
  i898.m_Height = i899[3]
  return i898
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i902 = root || request.c( 'TMPro.TMP_Character' )
  var i903 = data
  i902.m_ElementType = i903[0]
  i902.m_Unicode = i903[1]
  i902.m_GlyphIndex = i903[2]
  i902.m_Scale = i903[3]
  return i902
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i909 = data
  i908.Name = i909[0]
  i908.PointSize = i909[1]
  i908.Scale = i909[2]
  i908.CharacterCount = i909[3]
  i908.LineHeight = i909[4]
  i908.Baseline = i909[5]
  i908.Ascender = i909[6]
  i908.CapHeight = i909[7]
  i908.Descender = i909[8]
  i908.CenterLine = i909[9]
  i908.SuperscriptOffset = i909[10]
  i908.SubscriptOffset = i909[11]
  i908.SubSize = i909[12]
  i908.Underline = i909[13]
  i908.UnderlineThickness = i909[14]
  i908.strikethrough = i909[15]
  i908.strikethroughThickness = i909[16]
  i908.TabWidth = i909[17]
  i908.Padding = i909[18]
  i908.AtlasWidth = i909[19]
  i908.AtlasHeight = i909[20]
  return i908
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TMP_Glyph' )
  var i913 = data
  i912.id = i913[0]
  i912.x = i913[1]
  i912.y = i913[2]
  i912.width = i913[3]
  i912.height = i913[4]
  i912.xOffset = i913[5]
  i912.yOffset = i913[6]
  i912.xAdvance = i913[7]
  i912.scale = i913[8]
  return i912
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.KerningTable' )
  var i915 = data
  var i917 = i915[0]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i917.length; i += 1) {
    i916.add(request.d('TMPro.KerningPair', i917[i + 0]));
  }
  i914.kerningPairs = i916
  return i914
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.KerningPair' )
  var i921 = data
  i920.xOffset = i921[0]
  i920.m_FirstGlyph = i921[1]
  i920.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i921[2], i920.m_FirstGlyphAdjustments)
  i920.m_SecondGlyph = i921[3]
  i920.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i921[4], i920.m_SecondGlyphAdjustments)
  i920.m_IgnoreSpacingAdjustments = !!i921[5]
  return i920
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i922 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i923 = data
  var i925 = i923[0]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i925[i + 0]));
  }
  i922.m_GlyphPairAdjustmentRecords = i924
  return i922
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i928 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i929 = data
  i928.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i929[0], i928.m_FirstAdjustmentRecord)
  i928.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i929[1], i928.m_SecondAdjustmentRecord)
  i928.m_FeatureLookupFlags = i929[2]
  return i928
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i930 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i931 = data
  i930.m_GlyphIndex = i931[0]
  i930.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i931[1], i930.m_GlyphValueRecord)
  return i930
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i932 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i933 = data
  i932.m_XPlacement = i933[0]
  i932.m_YPlacement = i933[1]
  i932.m_XAdvance = i933[2]
  i932.m_YAdvance = i933[3]
  return i932
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i934 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i935 = data
  i934.sourceFontFileName = i935[0]
  i934.sourceFontFileGUID = i935[1]
  i934.pointSizeSamplingMode = i935[2]
  i934.pointSize = i935[3]
  i934.padding = i935[4]
  i934.packingMode = i935[5]
  i934.atlasWidth = i935[6]
  i934.atlasHeight = i935[7]
  i934.characterSetSelectionMode = i935[8]
  i934.characterSequence = i935[9]
  i934.referencedFontAssetGUID = i935[10]
  i934.referencedTextAssetGUID = i935[11]
  i934.fontStyle = i935[12]
  i934.fontStyleModifier = i935[13]
  i934.renderMode = i935[14]
  i934.includeFontFeatures = !!i935[15]
  return i934
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i938 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'regularTypeface')
  request.r(i939[2], i939[3], 0, i938, 'italicTypeface')
  return i938
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i940 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i941 = data
  i940.hashCode = i941[0]
  request.r(i941[1], i941[2], 0, i940, 'material')
  i940.materialHashCode = i941[3]
  request.r(i941[4], i941[5], 0, i940, 'spriteSheet')
  var i943 = i941[6]
  var i942 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i943.length; i += 1) {
    i942.add(request.d('TMPro.TMP_Sprite', i943[i + 0]));
  }
  i940.spriteInfoList = i942
  var i945 = i941[7]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 1, i944, '')
  }
  i940.fallbackSpriteAssets = i944
  i940.m_Version = i941[8]
  i940.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i941[9], i940.m_FaceInfo)
  var i947 = i941[10]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i947.length; i += 1) {
    i946.add(request.d('TMPro.TMP_SpriteCharacter', i947[i + 0]));
  }
  i940.m_SpriteCharacterTable = i946
  var i949 = i941[11]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('TMPro.TMP_SpriteGlyph', i949[i + 0]));
  }
  i940.m_SpriteGlyphTable = i948
  return i940
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i952 = root || request.c( 'TMPro.TMP_Sprite' )
  var i953 = data
  i952.name = i953[0]
  i952.hashCode = i953[1]
  i952.unicode = i953[2]
  i952.pivot = new pc.Vec2( i953[3], i953[4] )
  request.r(i953[5], i953[6], 0, i952, 'sprite')
  i952.id = i953[7]
  i952.x = i953[8]
  i952.y = i953[9]
  i952.width = i953[10]
  i952.height = i953[11]
  i952.xOffset = i953[12]
  i952.yOffset = i953[13]
  i952.xAdvance = i953[14]
  i952.scale = i953[15]
  return i952
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i958 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i959 = data
  i958.m_Name = i959[0]
  i958.m_HashCode = i959[1]
  i958.m_ElementType = i959[2]
  i958.m_Unicode = i959[3]
  i958.m_GlyphIndex = i959[4]
  i958.m_Scale = i959[5]
  return i958
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i962 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'sprite')
  i962.m_Index = i963[2]
  i962.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i963[3], i962.m_Metrics)
  i962.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i963[4], i962.m_GlyphRect)
  i962.m_Scale = i963[5]
  i962.m_AtlasIndex = i963[6]
  i962.m_ClassDefinitionType = i963[7]
  return i962
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i964 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i965 = data
  var i967 = i965[0]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('TMPro.TMP_Style', i967[i + 0]));
  }
  i964.m_StyleList = i966
  return i964
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i970 = root || request.c( 'TMPro.TMP_Style' )
  var i971 = data
  i970.m_Name = i971[0]
  i970.m_HashCode = i971[1]
  i970.m_OpeningDefinition = i971[2]
  i970.m_ClosingDefinition = i971[3]
  i970.m_OpeningTagArray = i971[4]
  i970.m_ClosingTagArray = i971[5]
  i970.m_OpeningTagUnicodeArray = i971[6]
  i970.m_ClosingTagUnicodeArray = i971[7]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i973 = data
  var i975 = i973[0]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i975[i + 0]) );
  }
  i972.files = i974
  i972.componentToPrefabIds = i973[1]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i979 = data
  i978.path = i979[0]
  request.r(i979[1], i979[2], 0, i978, 'unityObject')
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i981 = data
  var i983 = i981[0]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i983[i + 0]) );
  }
  i980.scriptsExecutionOrder = i982
  var i985 = i981[1]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i985[i + 0]) );
  }
  i980.sortingLayers = i984
  var i987 = i981[2]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i987[i + 0]) );
  }
  i980.cullingLayers = i986
  i980.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i981[3], i980.timeSettings)
  i980.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i981[4], i980.physicsSettings)
  i980.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i981[5], i980.physics2DSettings)
  i980.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i981[6], i980.qualitySettings)
  i980.enableRealtimeShadows = !!i981[7]
  i980.enableAutoInstancing = !!i981[8]
  i980.enableDynamicBatching = !!i981[9]
  i980.lightmapEncodingQuality = i981[10]
  i980.desiredColorSpace = i981[11]
  var i989 = i981[12]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i980.allTags = i988
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i993 = data
  i992.name = i993[0]
  i992.value = i993[1]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i997 = data
  i996.id = i997[0]
  i996.name = i997[1]
  i996.value = i997[2]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1001 = data
  i1000.id = i1001[0]
  i1000.name = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1003 = data
  i1002.fixedDeltaTime = i1003[0]
  i1002.maximumDeltaTime = i1003[1]
  i1002.timeScale = i1003[2]
  i1002.maximumParticleTimestep = i1003[3]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1005 = data
  i1004.gravity = new pc.Vec3( i1005[0], i1005[1], i1005[2] )
  i1004.defaultSolverIterations = i1005[3]
  i1004.bounceThreshold = i1005[4]
  i1004.autoSyncTransforms = !!i1005[5]
  i1004.autoSimulation = !!i1005[6]
  var i1007 = i1005[7]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1007[i + 0]) );
  }
  i1004.collisionMatrix = i1006
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1011 = data
  i1010.enabled = !!i1011[0]
  i1010.layerId = i1011[1]
  i1010.otherLayerId = i1011[2]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'material')
  i1012.gravity = new pc.Vec2( i1013[2], i1013[3] )
  i1012.positionIterations = i1013[4]
  i1012.velocityIterations = i1013[5]
  i1012.velocityThreshold = i1013[6]
  i1012.maxLinearCorrection = i1013[7]
  i1012.maxAngularCorrection = i1013[8]
  i1012.maxTranslationSpeed = i1013[9]
  i1012.maxRotationSpeed = i1013[10]
  i1012.baumgarteScale = i1013[11]
  i1012.baumgarteTOIScale = i1013[12]
  i1012.timeToSleep = i1013[13]
  i1012.linearSleepTolerance = i1013[14]
  i1012.angularSleepTolerance = i1013[15]
  i1012.defaultContactOffset = i1013[16]
  i1012.autoSimulation = !!i1013[17]
  i1012.queriesHitTriggers = !!i1013[18]
  i1012.queriesStartInColliders = !!i1013[19]
  i1012.callbacksOnDisable = !!i1013[20]
  i1012.reuseCollisionCallbacks = !!i1013[21]
  i1012.autoSyncTransforms = !!i1013[22]
  var i1015 = i1013[23]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1015[i + 0]) );
  }
  i1012.collisionMatrix = i1014
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1019 = data
  i1018.enabled = !!i1019[0]
  i1018.layerId = i1019[1]
  i1018.otherLayerId = i1019[2]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1023[i + 0]) );
  }
  i1020.qualityLevels = i1022
  var i1025 = i1021[1]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( i1025[i + 0] );
  }
  i1020.names = i1024
  i1020.shadows = i1021[2]
  i1020.anisotropicFiltering = i1021[3]
  i1020.antiAliasing = i1021[4]
  i1020.lodBias = i1021[5]
  i1020.shadowCascades = i1021[6]
  i1020.shadowDistance = i1021[7]
  i1020.shadowmaskMode = i1021[8]
  i1020.shadowProjection = i1021[9]
  i1020.shadowResolution = i1021[10]
  i1020.softParticles = !!i1021[11]
  i1020.softVegetation = !!i1021[12]
  i1020.activeColorSpace = i1021[13]
  i1020.desiredColorSpace = i1021[14]
  i1020.masterTextureLimit = i1021[15]
  i1020.maxQueuedFrames = i1021[16]
  i1020.particleRaycastBudget = i1021[17]
  i1020.pixelLightCount = i1021[18]
  i1020.realtimeReflectionProbes = !!i1021[19]
  i1020.shadowCascade2Split = i1021[20]
  i1020.shadowCascade4Split = new pc.Vec3( i1021[21], i1021[22], i1021[23] )
  i1020.streamingMipmapsActive = !!i1021[24]
  i1020.vSyncCount = i1021[25]
  i1020.asyncUploadBufferSize = i1021[26]
  i1020.asyncUploadTimeSlice = i1021[27]
  i1020.billboardsFaceCameraPosition = !!i1021[28]
  i1020.shadowNearPlaneOffset = i1021[29]
  i1020.streamingMipmapsMemoryBudget = i1021[30]
  i1020.maximumLODLevel = i1021[31]
  i1020.streamingMipmapsAddAllCameras = !!i1021[32]
  i1020.streamingMipmapsMaxLevelReduction = i1021[33]
  i1020.streamingMipmapsRenderersPerFrame = i1021[34]
  i1020.resolutionScalingFixedDPIFactor = i1021[35]
  i1020.streamingMipmapsMaxFileIORequests = i1021[36]
  i1020.currentQualityLevel = i1021[37]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1031 = data
  i1030.weight = i1031[0]
  i1030.vertices = i1031[1]
  i1030.normals = i1031[2]
  i1030.tangents = i1031[3]
  return i1030
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i1033 = data
  i1032.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1033[0], i1032.m_PersistentCalls)
  return i1032
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1034 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1035 = data
  i1034.xPlacement = i1035[0]
  i1034.yPlacement = i1035[1]
  i1034.xAdvance = i1035[2]
  i1034.yAdvance = i1035[3]
  return i1034
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"format":6,"wrapMode":7},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[61],"62":[18],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[7],"72":[7],"73":[7],"74":[7],"75":[7],"76":[7],"77":[7],"78":[7],"79":[7],"80":[7],"81":[7],"82":[7],"83":[7],"84":[18],"85":[42],"86":[87],"88":[87],"17":[16],"89":[7,90],"91":[92],"93":[31],"94":[18],"95":[16],"96":[39,42],"97":[26,16],"98":[99,39,42],"100":[39,42],"101":[42,39],"102":[64],"103":[7],"104":[105],"106":[107],"108":[16],"109":[42,16],"110":[16,26],"111":[16],"112":[26,16],"113":[42],"114":[26,16],"115":[16],"116":[16],"117":[16],"21":[17],"27":[26,16],"118":[16],"20":[17],"119":[16],"120":[16],"23":[16],"121":[16],"122":[16],"123":[16],"124":[16],"125":[16],"126":[16],"127":[26,16],"128":[16],"129":[16],"130":[16],"131":[16],"132":[26,16],"133":[16],"134":[37],"135":[37],"38":[37],"136":[37],"137":[18],"138":[18],"139":[2],"140":[141]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.CircleCollider2D","UnityEngine.PhysicsMaterial2D","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MetaballParticleClass","UnityEngine.GameObject","UnityEngine.TrailRenderer","Liquid","UnityEngine.Texture2D","UnityEngine.RenderTexture","Water2D.PhysicsSimulation","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasGroup","UnityEngine.UI.HorizontalLayoutGroup","FaucetManager","Faucet","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.EventSystems.EventTrigger","Water2D.Water2D_Spawner","Glass","UnityEngine.EdgeCollider2D","UnityEngine.UI.Button","GameManager2","SoundManager","UnityEngine.AudioClip","UnityEngine.AudioSource","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshCollider","UnityEngine.MeshRenderer","ResizeQuadEffectController","UnityEngine.AudioListener","Water2D.SpawnersManager","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.Font","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Ice","UnityEngine.BoxCollider2D","Water2D.Extentions.ColliderFillerGizmos","Water2D.ColliderFiller","BezierCurve.BezierCollider2D","UnityEngine.U2D.PixelPerfectCamera","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonGraphic","Spine.Unity.SkeletonMecanim","UnityEngine.Animator","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer"]

Deserializers.unityVersion = "2021.3.28f1";

Deserializers.productName = "BobaApp";

Deserializers.lunaInitializationTime = "03/20/2023 02:44:34";

Deserializers.lunaDaysRunning = "158.3";

Deserializers.lunaVersion = "5.2.0";

Deserializers.lunaSHA = "a655a1e01be315dbfa8d2e1b74c75f56b0112281";

Deserializers.creativeName = "123";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1575";

Deserializers.runtimeAnalysisExcludedMethodsCount = "5709";

Deserializers.runtimeAnalysisExcludedModules = "particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "911c31c7-21a3-4846-8028-18bb2e20fe1a";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

