import React from "react";
import Title from "../../Title/Title";

const History = () => {
  return (
    <section className="history-section md:px-10 px-3">
      <Title title="History" />
      <div className="flex justify-between flex-col md:flex-row items-center text-left gap-x-10 my-7">
        <div className="img-box"></div>
        <div className="text-box">
          <p>
            During the end of the 18th century and towards the start of the 19th
            century, it was noticed that philosophy emerged as a separate branch
            of social sciences and thus exclusive studies were carried out to
            study the intricacies of the human society and the individual as
            such.
            <br />
            <br />
            Psychology emerged in its initial form during this period wherein
            which there were vague descriptions of mental functions and
            perceptions. In 1879, Wundt and James carried out exclusive work on
            philosophical traditions. During this period, psychology did
            experience growing pains just as coaching seems to be experiencing
            now.
            <br />
            <br />
            The contemporary branch of modern management certainly had its roots
            put out in the 19th century. It was towards the middle of this era,
            that theories and structuring such as training, motivation,
            organizational structure, etc. were laid out and brought to notice
            during the industrial revolution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
