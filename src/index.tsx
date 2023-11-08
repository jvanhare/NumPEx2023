import { createRoot } from "react-dom/client";

import {
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  OrderedList,
} from "spectacle";

import "katex/dist/katex.min.css";
import Latex from "react-latex-next";

import Alert from "./components/Alert";
import Centered from "./components/Centered";
import Equation from "./components/Equation";
import Full from "./components/Full";
import Image from "./components/Image";
import InriaDeck from "./components/InriaDeck";
import TwoColumns from "./components/TwoColumns";

import "./index.css";

const Presentation = () => (
  <InriaDeck>
    <TwoColumns
      title="Context"
      left={
        <Text>
          <UnorderedList>
            <ListItem>
              Aeronautical engines' manufacturers such as SAFRAN must{" "}
              <Alert>reduce their environmental footprint</Alert>.
            </ListItem>
            <ListItem>
              ACARE 2050 objectives set a <Alert>reduction</Alert> of{" "}
              <Alert>75%</Alert> in production of CO2 and of <Alert>90%</Alert>{" "}
              of NOx.
              <UnorderedList>
                <ListItem>
                  Brings to the design of new and groundbreaking parts,
                </ListItem>
                <ListItem>
                  Requires more efficient and{" "}
                  <Alert>complex numerical tools</Alert>.
                </ListItem>
              </UnorderedList>
              <ListItem>
                Propellers and turbines are very complex with a large number of{" "}
                <Alert>technological effect</Alert>.
              </ListItem>
              <ListItem>
                SAFRAN is <Alert>pushing</Alert> to develop new numerical
                toolchains.
              </ListItem>
            </ListItem>
          </UnorderedList>
        </Text>
      }
      right={<Image fileName="leap.png" legend="LEAP." width="90%" />}
    ></TwoColumns>

    <TwoColumns
      title="Challenges"
      left={
        <Text>
          <OrderedList>
            <ListItem>
              Handle <Alert>very complex geometries</Alert>:
            </ListItem>
            <UnorderedList>
              <ListItem>
                Requires to use the automatic generation of tetrahedra meshes.
              </ListItem>
            </UnorderedList>
            <ListItem>
              Predict unsteady turbulent flows with a{" "}
              <Alert>high-fidelity</Alert>:
            </ListItem>
            <UnorderedList>
              <ListItem>
                Requires accurate and fast numerical methods on unstructured
                tetrahedra meshes to capture unsteady turbulent
                three-dimensional flows,
              </ListItem>
              <ListItem>Requires anisotropic mesh adaptation.</ListItem>
            </UnorderedList>
            <ListItem>
              And do it <Alert>efficiently</Alert>:
            </ListItem>
            <UnorderedList>
              <ListItem>
                Requires a massively parallel environment which deals with
                anisotropic unstructured meshes.
              </ListItem>
            </UnorderedList>
          </OrderedList>
        </Text>
      }
      right={
        <Image
          fileName="hlpw3.png"
          legend="AIAA HLPW3 Common Research Model."
          width="100%"
        />
      }
    ></TwoColumns>

    <TwoColumns
      title="Anisotropic mesh adaptation"
      left={
        <Text>
          <UnorderedList>
            <ListItem>Our numerical toolchain mainly composed of:</ListItem>
            <UnorderedList>
              <ListItem>
                <Alert>Fefloa.a</Alert>: robust anisotropic local remesher,
              </ListItem>
              <ListItem>
                <Alert>Wolf</Alert>: mixed Finite Volume Finite Element flow
                solver for the compressible Navier Stokes equations.
              </ListItem>
            </UnorderedList>
            <ListItem>Not limited to turbomachinery applications:</ListItem>
            <UnorderedList>
              <ListItem>High-lift configuration,</ListItem>
              <ListItem>Atmospheric reentry,</ListItem>
              <ListItem>Ice accretion,</ListItem>
              <ListItem>Supersonic aircraft.</ListItem>
            </UnorderedList>
          </UnorderedList>
        </Text>
      }
      right={
        <Image
          fileName="c608.png"
          legend="C608 Low-Boom Flight Demonstrator solution obtained with WOLF on the finest L2-norm adapted mesh."
          width="80%"
        />
      }
    ></TwoColumns>

    <Full>
      <Heading color="primary" textAlign="left">
        Flow solver
      </Heading>
      <UnorderedList>
        <ListItem>
          Compressible turbulent Navier-Stokes equations
          <Equation>
            <Latex>{`$$ \\dfrac{\\partial W}{\\partial t} + \\nabla \\cdot \\mathcal{F} \\left( W \\right) = \\mathcal{Q} \\left( W \\right) + \\mathcal{S} \\left( W \\right) $$`}</Latex>
          </Equation>
        </ListItem>
        <ListItem>Spalart-Allmaras turbulence model</ListItem>
        <ListItem>Mixed Element Volume method (MEV)</ListItem>
        <UnorderedList>
          <ListItem>
            Convective and source terms by Finite Volume method
          </ListItem>
          <ListItem>Diffusive terms by Finite Element method</ListItem>
        </UnorderedList>
        <ListItem>Vertex-centered using median cells</ListItem>
        <ListItem>Implicit time integration</ListItem>
        <UnorderedList>
          <ListItem>SGS iterative solver</ListItem>
          <ListItem>
            All terms are fully differentiated except for convective terms due
            to memory considerations
          </ListItem>
          <ListItem>Strong implicit solver</ListItem>
        </UnorderedList>
      </UnorderedList>
    </Full>

    <Full>
      <Heading color="primary" textAlign="left">
        Metric-based local remesher
      </Heading>
      <UnorderedList>
        <ListItem>Based on a unique cavity operator</ListItem>
        <ListItem>
          Remesh the surface and the volume at the same time based on geometry
          surface definition to <Alert>insert points on the surface</Alert>
        </ListItem>
      </UnorderedList>
      <Image
        fileName="metric.png"
        legend="Metric-based local remeshing."
        width="62%"
      />
    </Full>

    <TwoColumns
      title="Recent results - NASA Rotor 37"
      left={
        <Text>
          <UnorderedList>
            <ListItem>NASA Rotor 37 cold geometry</ListItem>
            <UnorderedList>
              <ListItem>
                Accurate turbulent flow predictions was obtained with
                unstructured meshes composed only of tetrahedra,
              </ListItem>
              <ListItem>Result independent of the initial mesh,</ListItem>
              <ListItem>
                Mesh-converged solutions are achieved in 3D thanks to
                anisotropic mesh adaptation,
              </ListItem>
              <ListItem>
                The stall on the transonic NASA Rotor 37 comes from tip vortices
                that increases with the pressure ratio inducing large flow
                separation at high pressure ratio.
              </ListItem>
            </UnorderedList>
          </UnorderedList>
        </Text>
      }
      right={
        <Image fileName="rotor37.png" legend="NASA Rotor 37." width="80%" />
      }
    ></TwoColumns>

    <Full>
      <Heading color="primary" textAlign="left">
        Recent results - NASA Rotor 37
      </Heading>
      <Image
        fileName="rotor37_tip.png"
        legend="NASA Rotor 37 adaptation to the tip vortices."
        width="60%"
      />
    </Full>

    <TwoColumns
      title="Recent results - TATEF"
      left={
        <Text>
          <UnorderedList>
            <ListItem>TATEF geometry:</ListItem>
            <UnorderedList>
              <ListItem>
                Three rows of shaped holes on the suction side,
              </ListItem>
              <ListItem>
                Four rows of cylindrical holes inclined by 45° in the opposite
                direction of the coolant feeding,
              </ListItem>
              <ListItem>
                Three rows of shaped holes on the pressure side,
              </ListItem>
              <ListItem>
                Cooling holes are fed through a plenum inside the blade.
              </ListItem>
            </UnorderedList>
          </UnorderedList>
        </Text>
      }
      right={<Image fileName="tatef.png" legend="NASA Rotor 37." width="80%" />}
    ></TwoColumns>

    <Full>
      <Heading color="primary" textAlign="left">
        Recent results - TATEF
      </Heading>
      <Image
        fileName="tatef_volume.png"
        legend="TATEF cut plane. Adapted anisotropic mesh (left) and temperature field (right)."
        width="90%"
      />
    </Full>

    <TwoColumns
      title="Application demonstrator - CREATE"
      left={
        <Text>
          <UnorderedList>
            <ListItem>
              CREATE compressor available at Ecole Centrale de Lyon in the
              Laboratory of Fluid Mechanics and Acoustics (LMFA):
              <UnorderedList>
                <ListItem>
                  Four stator rows and three rotors, for a total of{" "}
                  <Alert>592</Alert> blades,
                </ListItem>
                <ListItem>
                  A very coarse initial mesh using 300,000 elements per blade
                  leads to a final mesh composed of <Alert>177.6</Alert> million
                  elements,
                </ListItem>
                <ListItem>
                  High-fidelity simulation of the single blade of the NASA Rotor
                  37 compressor requires <Alert>66</Alert> million elements with
                  a computational time of <Alert>3200</Alert> CPU hours for an
                  accurate prediction close to the stall,
                </ListItem>
                <ListItem>
                  A very simple extrapolation leads to an adapted mesh of{" "}
                  <Alert>39.072</Alert> billion elements with a computational
                  time of <Alert>1,894,400</Alert> CPU hours.
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </Text>
      }
      right={
        <Image
          fileName="create.png"
          legend="Left, meridian view of the CREATE compressor. Right, picture of the CREATE compressor (courtesy of CNRS)."
          width="100%"
        />
      }
    ></TwoColumns>

    <TwoColumns
      title="Application demonstrator - CREATE"
      left={
        <Text>
          <UnorderedList>
            <ListItem>
              SAFRAN expects to simulate the{" "}
              <Alert>whole pressure ratio characteristic</Alert>
              from choke flow to stall for certification purpose and fuel
              consumption reduction:
            </ListItem>
            <UnorderedList>
              <ListItem>
                About <Alert>100</Alert> points are necessary to accurately
                predict such a characteristic,
              </ListItem>
              <ListItem>
                Leading to a computational time of <Alert>189,440,000</Alert>{" "}
                CPU hours,
              </ListItem>
              <ListItem>
                Or <Alert>1,372,754</Alert> GPU hours.
              </ListItem>
            </UnorderedList>
          </UnorderedList>
        </Text>
      }
      right={
        <Image
          fileName="rotor37_charac.png"
          legend="NASA Rotor 37. Mesh convergence of the temperature ratio characteristic."
          width="80%"
        />
      }
    ></TwoColumns>

    <TwoColumns
      title="Application demonstrator - CREATE"
      left={
        <Text>
          <UnorderedList>
            <ListItem>
              Three levels of parallelism can be distinguished:
            </ListItem>
            <UnorderedList>
              <ListItem>
                1 GPU and 10 TFLOPS: steady RANS solution of several stages made
                of single blade coupled by mixing planes,
              </ListItem>
              <ListItem>
                Several GPUs and 10 PFLOPS: steady RANS solutions of the 2π/16
                CREATE compressor,
              </ListItem>
              <ListItem>
                1 EFLOPS: simultaneously running 100 RANS/URANS simulations of
                the 2π CREATE compressor to predict the characteristic.
              </ListItem>
            </UnorderedList>
            <ListItem>
              The ultimate aim is to carry out hundreds, even thousands of such
              simulations to design and optimize aircraft engines to reduce fuel
              burn and pollutant emission, which is out of reach today.
            </ListItem>
            <ListItem>
              To achieve this, <Alert>MPI</Alert> & <Alert>GPU</Alert> libraries
              to handle efficiently anisotropic unstructured meshes.
            </ListItem>
          </UnorderedList>
        </Text>
      }
      right={
        <Image
          fileName="rotor37_charac.png"
          legend="NASA Rotor 37. Mesh convergence of the temperature ratio characteristic."
          width="80%"
        />
      }
    ></TwoColumns>
  </InriaDeck>
);

const root = createRoot(document.getElementById("root")!);
root.render(<Presentation />);
