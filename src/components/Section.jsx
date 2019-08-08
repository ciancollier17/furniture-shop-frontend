import React from 'react';

const Section = (props) => {
  return (
    <section id={props.sectionID} className="content">
      <h2 className="section-title">{props.sectionTitle}</h2>
      {props.children}
    </section>
  );
}

export default Section;
