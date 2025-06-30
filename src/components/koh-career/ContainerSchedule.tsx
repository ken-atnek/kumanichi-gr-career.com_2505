/* =======================================
 * 熊日広告社 スケジュール
 * URL:src/components/koh-career/ContainerSchedule.tsx
 * Referenced in: src/app/digital-career/page.tsx
 * Created: 2025-06-27
 * Last updated: 2025-06-27
 * ======================================= */
import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import styles from '@/styles/koh-career/PageTop.module.scss';
import { scheduleList } from '@/data/koh-career/scheduleList';

type ScheduleItem = {
  time: string;
  activity: string;
};

type WorkScheduleProps = {
  image: StaticImageData;
  title: string;
  schedule: ScheduleItem[];
};

const WorkSchedule = ({ image, title, schedule }: WorkScheduleProps) => {
  return (
    <>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={`${title}の様子`} />
      </div>
      <div className={styles.textWrapper}>
        <h3>{title}</h3>
        <ul className={styles.listSchedule}>
          {schedule.map((item, index) => (
            <li key={index}>
              <time>{item.time}</time>{' '}
              {item.activity.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i !== item.activity.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </li>
          ))}
        </ul>
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
