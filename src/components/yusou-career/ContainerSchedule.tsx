/* =======================================
 * 熊日メディアコム スケジュール
 * URL:src/components/yusou-career/ContainerSchedule.tsx
 * Referenced in: src/app/yusou-career/page.tsx
 * Created: 2025-07-01
 * Last updated: 2025-07-01
 * ======================================= */
import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import styles from '@/styles/yusou-career/PageTop.module.scss';
import { scheduleList } from '@/data/yusou-career/scheduleList';

type ScheduleItem = {
  time: string;
  activity: string;
};
type QuestionsItem = {
  question: string;
  answerTitle: string;
  answer?: string;
};

type WorkScheduleProps = {
  image: StaticImageData;
  title: string;
  dept: string;
  name: string;
  schedule: ScheduleItem[];
  questions: QuestionsItem[];
};

const WorkSchedule = ({
  image,
  title,
  schedule,
  name,
  dept,
  questions,
}: WorkScheduleProps) => {
  return (
    <>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={`${title}の様子`} />
      </div>
      <div className={styles.textWrapper}>
        <h3>
          {title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h3>
        <div className={styles.dept}>
          <span>部署</span>
          {dept}
        </div>
        <div className={styles.name}>
          <span>氏名</span>
          {name}
        </div>
        {questions?.length > 0 && (
          <ul className={styles.listQuestions}>
            {questions.map((item, index) => (
              <li key={index}>
                <h4>{item.question}</h4>
                <h5>{item.answerTitle}</h5>
                {item.answer && (
                  <p className={styles.answer}>
                    {item.answer?.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
        {schedule?.length > 0 && (
          <ul className={styles.listSchedule}>
            {schedule.map((item, index) => (
              <li key={index}>
                <time>{item.time}</time>
                {item.activity.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i !== item.activity.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

const ContainerSchedule = () => {
  return (
    <ul className={styles.listWorkSchedule}>
      {scheduleList.map((item, index) => (
        <li key={index} className={styles.listItem}>
          <WorkSchedule {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ContainerSchedule;
