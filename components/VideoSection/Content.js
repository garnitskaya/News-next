import Button from './../Button/Button';

import styles from './VideoSection.module.scss';

const data = [
  {
    id: 1,
    poster: "/image/video-1.jpg",
    video: "",
    date: "05 серпня 11:00",
    title:
      '"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником',
  },
  {
    id: 2,
    poster: "/image/video-2.jpg",
    video: "",
    date: "05 серпня 11:00",
    title:
      'Ватажок "ДНР" підтвердив підготовку самосуду над полоненими українськими військовими.',
  },
  {
    id: 3,
    poster: "/image/video-4.jpg",
    video: "",
    date: "05 серпня 11:00",
    title: '"Спекотні літні канікули": Міноборони України попередило росіян про наслідки відвідування Криму (відео)',
  },
  {
    id: 4,
    poster: "/image/video-3.jpg",
    video: "",
    date: "05 серпня 11:00",
    title: 'Під москвою палала військова частина, де проходять службу строковики (відео)'
  },
  {
    id: 5,
    poster: "/image/video-5.jpg",
    video: "",
    date: "05 серпня 11:00",
    title: 'СБУ затримала в Києві "військового експерта", який працював на росію (фото)',
  },
];


const Content = ({ clientWidth }) => {
  return (
    <div className={styles.wrapper}>
      {data.map(({ id, poster, video, date, title }) => (
        <div
          className={styles.item}
          key={id} >
          <div className={styles.videoBlock}>
            <svg className={styles.play} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40ZM20.0899 13.1039L26.1934 17.4765V17.4796C26.5984 17.77 26.9277 18.1494 27.1547 18.5872C27.3817 19.0251 27.5 19.5089 27.5 19.9997C27.5 20.4905 27.3817 20.9744 27.1547 21.4122C26.9277 21.8501 26.5984 22.2295 26.1934 22.5199L20.0899 26.8925C19.6135 27.235 19.0492 27.4416 18.4598 27.4893C17.8704 27.5371 17.279 27.4241 16.7514 27.1629C16.2238 26.9018 15.7807 26.5027 15.4715 26.0101C15.1623 25.5175 14.9991 24.9508 15 24.3729V15.6234C15.0005 15.0461 15.1646 14.4803 15.4741 13.9885C15.7836 13.4968 16.2264 13.0984 16.7535 12.8375C17.2806 12.5766 17.8713 12.4634 18.4602 12.5104C19.0491 12.5574 19.6132 12.7628 20.0899 13.1039Z" fill="white" />
            </svg>
            <video
              className={styles.video}
              poster={poster}
              preload="metadata">
              <source type="video/mp4" src={video} />
            </video>
          </div>
          <div className={styles.content}>
            <div className={styles.date}>{date}</div>
            <div className={styles.title}>
              {id != 1 ? title.slice(0, 58) + '...' : title}
            </div>
          </div>
        </div>
      ))}
      {clientWidth <= 992 && <Button type="border-white">Більше</Button>}
    </div>
  );
};

export default Content;