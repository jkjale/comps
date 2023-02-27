import { useState } from 'react';
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Here is an importan agreement for you to accept
      </p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed leo a orci dignissim molestie at vel lectus. Curabitur ac nunc consectetur, auctor purus id, mattis diam. Integer ut lobortis diam. Donec id erat commodo, finibus eros non, tincidunt massa. Sed eu urna elit. Nam quis pretium orci, a accumsan tortor. Nam cursus elit at nibh pharetra, ut iaculis massa auctor. Suspendisse a massa id tellus sagittis accumsan. Nam fringilla, massa vel tristique feugiat, dolor erat fermentum lacus, vitae sollicitudin urna lacus in felis. Proin sed eros quis magna consequat tempor in at lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed leo a orci dignissim molestie at vel lectus. Curabitur ac nunc consectetur, auctor purus id, mattis diam. Integer ut lobortis diam. Donec id erat commodo, finibus eros non, tincidunt massa. Sed eu urna elit. Nam quis pretium orci, a accumsan tortor. Nam cursus elit at nibh pharetra, ut iaculis massa auctor. Suspendisse a massa id tellus sagittis accumsan. Nam fringilla, massa vel tristique feugiat, dolor erat fermentum lacus, vitae sollicitudin urna lacus in felis. Proin sed eros quis magna consequat tempor in at lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed leo a orci dignissim molestie at vel lectus. Curabitur ac nunc consectetur, auctor purus id, mattis diam. Integer ut lobortis diam. Donec id erat commodo, finibus eros non, tincidunt massa. Sed eu urna elit. Nam quis pretium orci, a accumsan tortor. Nam cursus elit at nibh pharetra, ut iaculis massa auctor. Suspendisse a massa id tellus sagittis accumsan. Nam fringilla, massa vel tristique feugiat, dolor erat fermentum lacus, vitae sollicitudin urna lacus in felis. Proin sed eros quis magna consequat tempor in at lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed leo a orci dignissim molestie at vel lectus. Curabitur ac nunc consectetur, auctor purus id, mattis diam. Integer ut lobortis diam. Donec id erat commodo, finibus eros non, tincidunt massa. Sed eu urna elit. Nam quis pretium orci, a accumsan tortor. Nam cursus elit at nibh pharetra, ut iaculis massa auctor. Suspendisse a massa id tellus sagittis accumsan. Nam fringilla, massa vel tristique feugiat, dolor erat fermentum lacus, vitae sollicitudin urna lacus in felis. Proin sed eros quis magna consequat tempor in at lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed leo a orci dignissim molestie at vel lectus. Curabitur ac nunc consectetur, auctor purus id, mattis diam. Integer ut lobortis diam. Donec id erat commodo, finibus eros non, tincidunt massa. Sed eu urna elit. Nam quis pretium orci, a accumsan tortor. Nam cursus elit at nibh pharetra, ut iaculis massa auctor. Suspendisse a massa id tellus sagittis accumsan. Nam fringilla, massa vel tristique feugiat, dolor erat fermentum lacus, vitae sollicitudin urna lacus in felis. Proin sed eros quis magna consequat tempor in at lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed leo a orci dignissim molestie at vel lectus. Curabitur ac nunc consectetur, auctor purus id, mattis diam. Integer ut lobortis diam. Donec id erat commodo, finibus eros non, tincidunt massa. Sed eu urna elit. Nam quis pretium orci, a accumsan tortor. Nam cursus elit at nibh pharetra, ut iaculis massa auctor. Suspendisse a massa id tellus sagittis accumsan. Nam fringilla, massa vel tristique feugiat, dolor erat fermentum lacus, vitae sollicitudin urna lacus in felis. Proin sed eros quis magna consequat tempor in at lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed leo a orci dignissim molestie at vel lectus. Curabitur ac nunc consectetur, auctor purus id, mattis diam. Integer ut lobortis diam. Donec id erat commodo, finibus eros non, tincidunt massa. Sed eu urna elit. Nam quis pretium orci, a accumsan tortor. Nam cursus elit at nibh pharetra, ut iaculis massa auctor. Suspendisse a massa id tellus sagittis accumsan. Nam fringilla, massa vel tristique feugiat, dolor erat fermentum lacus, vitae sollicitudin urna lacus in felis. Proin sed eros quis magna consequat tempor in at lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed leo a orci dignissim molestie at vel lectus. Curabitur ac nunc consectetur, auctor purus id, mattis diam. Integer ut lobortis diam. Donec id erat commodo, finibus eros non, tincidunt massa. Sed eu urna elit. Nam quis pretium orci, a accumsan tortor. Nam cursus elit at nibh pharetra, ut iaculis massa auctor. Suspendisse a massa id tellus sagittis accumsan. Nam fringilla, massa vel tristique feugiat, dolor erat fermentum lacus, vitae sollicitudin urna lacus in felis. Proin sed eros quis magna consequat tempor in at lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed leo a orci dignissim molestie at vel lectus. Curabitur ac nunc consectetur, auctor purus id, mattis diam. Integer ut lobortis diam. Donec id erat commodo, finibus eros non, tincidunt massa. Sed eu urna elit. Nam quis pretium orci, a accumsan tortor. Nam cursus elit at nibh pharetra, ut iaculis massa auctor. Suspendisse a massa id tellus sagittis accumsan. Nam fringilla, massa vel tristique feugiat, dolor erat fermentum lacus, vitae sollicitudin urna lacus in felis. Proin sed eros quis magna consequat tempor in at lorem.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed leo a orci dignissim molestie at vel lectus. Curabitur ac nunc consectetur, auctor purus id, mattis diam. Integer ut lobortis diam. Donec id erat commodo, finibus eros non, tincidunt massa. Sed eu urna elit. Nam quis pretium orci, a accumsan tortor. Nam cursus elit at nibh pharetra, ut iaculis massa auctor. Suspendisse a massa id tellus sagittis accumsan. Nam fringilla, massa vel tristique feugiat, dolor erat fermentum lacus, vitae sollicitudin urna lacus in felis. Proin sed eros quis magna consequat tempor in at lorem.
      </p>
    </div>
  );
}


export default ModalPage;