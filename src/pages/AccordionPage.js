import Accordion from "../components/Accordion";


function AccordionPage() {
  const items = [
    {
      id: 'l2kj5',
      label: 'Can i use react on a project?',
      content: 'You can use react on any project you want.You can use react on any project you want.'
    },
    {
      id: 'sdl2kj5',
      label: 'Can i use react on a project?',
      content: 'You can use react on any project you want. You can use react on any project you want.'
    },
    {
      id: 'uyl2kj5',
      label: 'Can i use react on a project?',
      content: 'You can use react on any project you want. You can use react on any project you want.'
    },
  ];

  return (
    <Accordion items={items}/>
  );
}


export default AccordionPage;