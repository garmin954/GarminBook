---
title: 走进3D世界
nav:
  path: /frame
  title: 基础
  order: 50
group:
  path: /frame/threejs
  title: THREE JS
  order: 30
---

##

### 场景 scene

- Scene：普通场景，用于存放 3D 对象。
- Fog：雾化场景，用于模拟远景的雾化效果。
- FogExp2：指数雾化场景，用于模拟远景的雾化效果，比 Fog 更加自然。
- PMREMGenerator：预计算辐射照度贴图（Precomputed Radiance Transfer Maps）生成器，用于加速 PBR 渲染。
- PMREMCubeUVPacker：预计算辐射照度贴图立方体贴图生成器，用于加速 PBR 渲染。

```
属性：

type：对象类型，值为字符串 "Scene"，不可更改。
id：对象的唯一标识，由 THREE.Object3D 自动分配。
uuid：对象的 UUID，由 THREE.MathUtils.generateUUID() 自动生成。
name：对象的名称，可以自定义。
parent：对象的父级，如果没有父级则为 null。
children：一个数组，包含该对象的所有子对象。
up：一个 THREE.Vector3 对象，表示该对象的上方向，默认为 THREE.Object3D.DefaultUp。
position：一个 THREE.Vector3 对象，表示该对象的位置。
rotation：一个 THREE.Euler 对象，表示该对象的旋转角度。
quaternion：一个 THREE.Quaternion 对象，表示该对象的旋转四元数。
scale：一个 THREE.Vector3 对象，表示该对象的缩放比例。
modelViewMatrix：一个 THREE.Matrix4 对象，表示该对象的模型视图矩阵。
normalMatrix：一个 THREE.Matrix3 对象，表示该对象的法向量矩阵。
matrix：一个 THREE.Matrix4 对象，表示该对象的变换矩阵。
matrixWorld：一个 THREE.Matrix4 对象，表示该对象的世界变换矩阵。
matrixAutoUpdate：一个布尔值，表示是否自动更新变换矩阵。
matrixWorldNeedsUpdate：一个布尔值，表示是否需要更新世界变换矩阵。
layers：一个 THREE.Layers 对象，表示该对象所属的层。
visible：一个布尔值，表示该对象是否可见。
castShadow：一个布尔值，表示该对象是否产生阴影。
receiveShadow：一个布尔值，表示该对象是否接收阴影。
frustumCulled：一个布尔值，表示该对象是否进行视锥体裁剪。
renderOrder：一个数字，表示该对象的渲染顺序。
userData：一个对象，可以用来存储该对象的自定义数据。
background：场景的背景颜色，可以是一个颜色值或者纹理。
fog：场景的雾效，可以是一个线性雾（LinearFog）或者指数雾（ExponentialFog）。
overrideMaterial：场景中所有对象的默认材质，可以是任意的 THREE.Material 对象。
autoUpdate：一个布尔值，表示场景中的对象是否自动更新。如果设置为 false，需要手动调用场景的 updateMatrixWorld() 方法来更新对象的位置和旋转等信息。


方法：

add(object)：将一个对象添加到场景中。
remove(object)：将一个对象从场景中移除。
getObjectById(id)：根据对象的 id 获取对象。
getObjectByName(name)：根据对象的名称获取对象。
getObjectByProperty(name, value)：根据对象的属性获取对象。
getWorldPosition(target)：将 target 的位置设置为场景中的世界坐标。
getWorldQuaternion(target)：将 target 的旋转四元数设置为场景中的世界坐标。
getWorldScale(target)：将 target 的缩放比例设置为场景中的世界坐标。
getWorldDirection(target)：将 target 的方向设置为场景中的世界坐标。
updateMatrix()：更新对象的变换矩阵。
updateMatrixWorld(force)：更新对象的世界变换矩阵。如果 force 参数为 true，则强制更新所有子对象的世界变换矩阵。
traverse(callback)：遍历场景中的所有子对象，并对每个对象执行指定的回调函数。
traverseVisible(callback)：遍历场景中所有可见的子对象，并对每个对象执行指定的回调函数。
traverseAncestors(callback)：遍历场景中所有祖先对象，并对每个对象执行指定的回调函数。
clone(recursive)：克隆场景对象。如果 recursive 参数为 true，则会递归克隆场景中的所有子对象。
toJSON()：将场景对象转换为 JSON 格式的数据。
dispose()：释放场景对象及其所有子对象占用的内存。

```

### 网格 mesh

- BufferGeometry：使用缓冲区的几何体，可以提高渲染性能。
- BoxBufferGeometry：立方体几何体。
- CircleBufferGeometry：圆形几何体。
- ConeBufferGeometry：圆锥体几何体。
- CylinderBufferGeometry：圆柱体几何体。
- DodecahedronBufferGeometry：十二面体几何体。
- ExtrudeBufferGeometry：拉伸几何体，可以根据路径生成几何体。
- IcosahedronBufferGeometry：二十面体几何体。
- LatheBufferGeometry：样条曲线几何体，可以根据样条曲线生成几何体。
- OctahedronBufferGeometry：八面体几何体。
- PlaneBufferGeometry：平面几何体。
- PolyhedronBufferGeometry：多面体几何体。
- RingBufferGeometry：环形几何体。
- ShapeBufferGeometry：基于形状的几何体，可以根据形状生成几何体。
- SphereBufferGeometry：球体几何体。
- TetrahedronBufferGeometry：四面体几何体。
- TextBufferGeometry：文本几何体，可以根据文字生成几何体。
- TorusBufferGeometry：圆环几何体。
- TorusKnotBufferGeometry：环面纽结几何体。
- TubeBufferGeometry：管道几何体，可以根据路径生成几何体。

### 材质 material

- LineBasicMaterial：用于绘制线条的材质。
- LineDashedMaterial：用于绘制虚线的材质。
- MeshBasicMaterial：最简单的材质类型，只有颜色属性，不会受到光照影响。
- MeshDepthMaterial：深度材质，用于渲染深度贴图。
- MeshDistanceMaterial：距离材质，用于根据相机到物体的距离来改变物体的颜色。
- MeshLambertMaterial：漫反射材质，会受到光照影响，但不会产生高光。
- MeshMatcapMaterial：Matcap 材质，用于实现 Matcap 渲染效果。
- MeshNormalMaterial：法向量材质，用于调试法向量。
- MeshPhongMaterial：高光材质，会受到光照影响，并产生高光。
- MeshPhysicalMaterial：物理材质，支持更加真实的 PBR 渲染，包括金属度、粗糙度等属性。
- MeshStandardMaterial：标准材质，综合了漫反射和高光，支持 PBR 渲染。
- MeshToonMaterial：卡通材质，会产生扁平的阴影效果，适用于卡通风格的场景。
- PointsMaterial：用于绘制点的材质。
- RawShaderMaterial：原始着色器材质，用于自定义着色器。
- ShaderMaterial：着色器材质，用于自定义着色器。
- ShadowMaterial：阴影材质，用于渲染阴影贴图。
- SpriteMaterial：精灵材质，用于绘制精灵。

### 摄像头 camera

- ArrayCamera：用于渲染多个摄像头的场景。
- CubeCamera：用于渲染立方体贴图的场景。
- OrthographicCamera：正交投影摄像头，用于渲染 2D 场景或者不需要透视效果的 3D 场景。
- PerspectiveCamera：透视投影摄像头，用于渲染透视效果的 3D 场景。
- StereoCamera：用于渲染立体效果的场景。

### 灯光 light

- AmbientLight：环境光，用于模拟场景中的全局光照。
- DirectionalLight：平行光，模拟太阳光，具有方向性。
- HemisphereLight：半球光，模拟天空光，没有方向性。
- PointLight：点光源，模拟灯泡光，向四面八方发射光线。
- RectAreaLight：矩形区域光，模拟长条形灯光，可以控制宽度和高度。
- SpotLight：聚光灯，模拟手电筒光，具有方向性和锥形光束。

### 渲染器 renderer

- WebGLRenderer：使用 WebGL 技术进行渲染的渲染器。
- CSS3DRenderer：使用 CSS3 技术进行渲染的渲染器。
- SVGRenderer：使用 SVG 技术进行渲染的渲染器。
- CanvasRenderer：使用 Canvas 技术进行渲染的渲染器。

- 空调 7800
- 洗衣机 2000
- 灯 3000
- 床 7500
- 沙发+茶几
