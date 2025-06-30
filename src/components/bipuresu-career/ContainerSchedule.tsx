/* =======================================
 * 熊日会館 スケジュール
 * URL:src/components/bipuresu-career/ContainerSchedule.tsx
 * Referenced in: src/app/bipuresu-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import styles from '@/styles/bipuresu-career/PageTop.module.scss';
import { scheduleList } from '@/data/bipuresu-career/scheduleList';

type ScheduleItem = {
  time: string;
  activity: string;
};

type WorkScheduleProps = {
  image: StaticImageData;
  title: string;
  schedule: ScheduleItem[];
  noteTitle?: string;
  note?: string;
};

const WorkSchedule = ({
  image,
  title,
  schedule,
  noteTitle,
  note,
}: WorkScheduleProps) => {
  return (
    <>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={`${title}の様子`} />
      </div>
      <div className={styles.textWrapper}>
        <h3>
          {title.split(/\\n/).map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h3>

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
        {noteTitle && (
          <h4 className={styles.noteTitle}>
            {noteTitle.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h4>
        )}
        {note && (
          <p className={styles.note}>
            {note.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
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
