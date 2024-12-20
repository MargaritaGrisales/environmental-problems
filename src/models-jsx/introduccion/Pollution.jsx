/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: tech.service.allwe (https://sketchfab.com/tech.service.allwe)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pollution-0c60fcb8a11b47599e5c379635aadcf4
Title: pollution
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Pollution = (props) => {
  const { nodes, materials } = useGLTF('models-3d/pollution.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group
                  name="97d0ba91011f4f1f8d7d91d4c9ff59e4fbx_1"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}>
                  <group name="RootNode_2">
                    <group name="pCylinder203_3" position={[0, -864.435, 0]}>
                      <group name="pCylinder203_bottle_of_water_0_4">
                        <mesh
                          name="Object_8"
                          geometry={nodes.Object_8.geometry}
                          material={materials.bottle_of_water}
                        />
                      </group>
                      <group name="pCylinder203_radioactive_plants_0_5">
                        <mesh
                          name="Object_10"
                          geometry={nodes.Object_10.geometry}
                          material={materials.radioactive_plants}
                        />
                      </group>
                      <group name="pCylinder203_cans_of_coke_0_6">
                        <mesh
                          name="Object_12"
                          geometry={nodes.Object_12.geometry}
                          material={materials.cans_of_coke}
                        />
                      </group>
                      <group name="pCylinder203_crate_0_7">
                        <mesh
                          name="Object_14"
                          geometry={nodes.Object_14.geometry}
                          material={materials.crate}
                        />
                      </group>
                      <group name="pCylinder203_open_barresls_0_8">
                        <mesh
                          name="Object_16"
                          geometry={nodes.Object_16.geometry}
                          material={materials.open_barresls}
                        />
                      </group>
                      <group name="pCylinder203_closed_barrels_0_9">
                        <mesh
                          name="Object_18"
                          geometry={nodes.Object_18.geometry}
                          material={materials.closed_barrels}
                        />
                      </group>
                      <group name="pCylinder203_pipes_0_10">
                        <mesh
                          name="Object_20"
                          geometry={nodes.Object_20.geometry}
                          material={materials.pipes}
                        />
                      </group>
                      <group name="pCylinder203_lambert1_0_11">
                        <mesh
                          name="Object_22"
                          geometry={nodes.Object_22.geometry}
                          material={materials.lambert1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models-3d/pollution.glb')
export default Pollution;
