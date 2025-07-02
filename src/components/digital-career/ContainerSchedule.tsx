/* =======================================
 * 熊日デジタル スケジュール
 * URL:src/components/digital-career/ContainerSchedule.tsx
 * Referenced in: src/app/digital-career/page.tsx
 * Created: 2025-06-23
 * Last updated: 2025-06-23
 * ======================================= */
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import styles from '@/styles/digital-career/PageTop.module.scss';
import { scheduleList } from '@/data/digital-career/scheduleList';

type ScheduleItem = {
  time: string;
  activity: string;
};

type WorkScheduleProps = {
  image: StaticImageData;
  title: string;
  name: string;
  role: string;
  schedule: ScheduleItem[];
};

const WorkSchedule = ({
  image,
  title,
  name,
  role,
  schedule,
}: WorkScheduleProps) => {
  return (
    <>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={`${role}の様子`} />
      </div>
      <div className={styles.textWrapper}>
        <h3>
          {title}
          <span>
            {name}（{role}）
          </span>
        </h3>
        <ul className={styles.listSchedule}>
          {schedule.map((item, index) => (
            <li key={index}>
              <time>{item.time}</time> {item.activity}
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
