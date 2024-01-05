import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type TopicItem = {
  title: string;
  path: string;
  image: string;
};

const topicList: TopicItem[] = [
  {
    title: "HTML",
    path: "/docs/Topics/HTML-CSS/HTML/",
    image:
      "https://media2.giphy.com/media/3osxYcHkIWl29UKdoc/200w.webp?cid=ecf05e47wjc86ou415gaewpujk6q7x1drf5b4rz48kshx05k&ep=v1_gifs_search&rid=200w.webp&ct=g",
  },
  {
    title: "CSS",
    path: "/docs/Topics/HTML-CSS/CSS/CSS",
    image:
      "https://media2.giphy.com/media/13FrpeVH09Zrb2/200.webp?cid=ecf05e471gr9m0rymcm7soozgh8kqa3a5v63tnouwz4nybkl&ep=v1_gifs_search&rid=200.webp&ct=g",
  },
  {
    title: "Javascript",
    path: "/docs/Topics/Javascript/",
    image:
      "//media0.giphy.com/media/hUhARUMJB4OsRMXJ6l/200w.webp?cid=ecf05e47cnfozh2ae51nnjcd5czqw0l12bmbmr68az3bi97i&ep=v1_gifs_search&rid=200w.webp&ct=g",
  },

  {
    title: "Computer Science",
    path: "/docs/Topics/Computer-Science/Basics",
    image: "https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif",
  },
  {
    title: "React",
    path: "/docs/Topics/React/",
    image:
      "https://media1.giphy.com/media/scZPhLqaVOM1qG4lT9/giphy.webp?cid=ecf05e4746899dlj67hgm7ihcro6ufnqb0dj9h7bc09hxf4w&ep=v1_gifs_search&rid=giphy.webp&ct=g",
  },
  {
    title: "AI",
    path: "/docs/Topics/AI",
    image:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3U0OTBma2FxeTlycGV2dWttMGx2YW5manB1Y3M0bDlrdW1yeW10ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IZY2SE2JmPgFG/giphy.gif",
  },
];

function Topic({ title, image, path }: TopicItem) {
  return (
    <Link href={path} className={clsx("col col--3")}>
      <div className={`feature-padding`}>
        <div className="text--center">
          <img className="topic-image" src={image} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
        </div>
      </div>
    </Link>
  );
}

export default function TopicList(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {topicList.map((props, idx) => (
            <Topic key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
