/* eslint-disable react/jsx-key */

const containt = [
  {
    smallTitle: 'Delivery',
    bigTitle: 'How We Work',
    desc: [<div className="p-l">Clear scope, fast builds, and direct communication on Discord.</div>, <div className="p-l">We stay involved from kickoff through deployment and support.</div>],
    descMobile: [<div className="p-l">Clear scope, fast builds, and direct communication on Discord.</div>, <div className="p-l">We stay involved from kickoff through deployment and support.</div>],
    options: [
      { title: 'Brief', desc: 'Align on goals, features, and timeline' },
      {
        title: 'Build',
        desc: 'Ship in focused iterations with visible progress',
      },
      {
        title: 'Polish',
        desc: 'Test, harden, and refine until it feels right',
      },
      { title: 'Deploy', desc: 'Launch, document, and hand over cleanly' },
      { title: 'Support', desc: 'Stay reachable for tweaks and fixes' },
    ],
  },
  {
    smallTitle: 'Workflow',
    bigTitle: 'Workflow',
    desc: [<div className="p-l">We keep communication simple — Discord first, no fluff.</div>, <div className="p-l">You always know what is shipping next.</div>],
    descMobile: [<div className="p-l">We keep communication simple — Discord first, no fluff.</div>, <div className="p-l">You always know what is shipping next.</div>],
    options: [
      { title: 'Kickoff', desc: 'Confirm scope and delivery plan' },
      { title: 'Development', desc: 'Build and share progress regularly' },
      { title: 'Review', desc: 'Iterate from your feedback' },
      { title: 'Launch', desc: 'Deploy and verify everything works' },
      { title: 'Follow-up', desc: 'Optional maintenance and improvements' },
    ],
  },
];
export default containt;
