import React, { useState } from 'react';
import './mypageScheduler.scss';
import { DesktopHeader, MobileHeader, Mobile } from '../../mediaQuery';
import MypageNavbar from '../common/MypageNavbar';
import MypagePlus from '../../img/mypagePlus.svg';
import MypageDelete from '../../img/mypageDelete.svg';
import AddScheduleModal from './components/AddScheduleModal';

interface ScheduleItem {
  day: string;
  startTime: number;
  endTime: number;
  color: string;
  subject: string;
}

const MypageScheduler: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addScheduleItem = (
    day: string,
    startTime: number,
    endTime: number,
    color: string,
    subject: string,
  ) => {
    const newItem = { day, startTime, endTime, color, subject };
    setScheduleItems([...scheduleItems, newItem]);
  };
  const renderScheduleItem = (
    day: string,
    startTime: number,
    endTime: number,
    color: string,
    subject: string,
  ) => {
    const adjustColorLuminance = (color: string, lum: number) => {
      color = String(color).replace(/[^0-9a-f]/gi, '');
      if (color.length < 6) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
      }
      lum = lum || 0;

      let rgb = '#';
      for (let i = 0; i < 3; i++) {
        let c: number = parseInt(color.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + Math.round(c * lum)), 255));
        rgb += ('00' + c.toString(16)).slice(-2);
      }

      return rgb;
    };

    // 명도 조절 부분
    const adjustedColor = adjustColorLuminance(color, 0.4);

    const style: React.CSSProperties = {
      backgroundColor: adjustedColor,
      position: 'relative',
      zIndex: 1,
    };

    const rowSpan = Math.max(1, endTime - startTime + 1);
    style.height = `${rowSpan * 100}%`;

    return (
      <td key={`${day}-${startTime}`} rowSpan={rowSpan} style={style}>
        {subject}
      </td>
    );
  };
  const renderEmptyCell = (day: string, time: number) => {
    const isItemStartingBefore = scheduleItems.some(
      item => item.day === day && item.startTime < time && item.endTime >= time,
    );

    if (!isItemStartingBefore) {
      return (
        <td key={`${day}-${time}`} style={{ height: '100%' }}>
          <div style={{ width: '100%', height: '100%' }}></div>
        </td>
      );
    }

    return null;
  };

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (
    day: string,
    startTime: number,
    endTime: number,
    color: string,
    subject: string,
  ) => {
    const newItem = { day, startTime, endTime };
    const isOverlapping = scheduleItems.some(item => {
      const isSameDay = item.day === newItem.day;
      const isOverlap =
        (item.startTime <= newItem.startTime && item.endTime >= newItem.startTime) ||
        (newItem.startTime <= item.startTime && newItem.endTime >= item.startTime);
      return isSameDay && isOverlap;
    });

    if (isOverlapping) {
      alert('중복된 시간표가 있습니다.');
      return;
    }

    addScheduleItem(day, startTime, endTime, color, subject);
    setIsModalOpen(false);
  };

  const handleModalBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <MypageNavbar />
      <DesktopHeader>
        <div className="mypagescheduler-maincontainer">
          <div className="mypagescheduler-titlecontainer">
            <h2 className="mypagescheduler-mainname">
              <span>SCHOOL</span>
              <span>SCHEDULER</span>
            </h2>
            <div className="mypagescheduler-iconcontainer">
              <img className="mypagescheduler-deleteicon" src={MypageDelete}></img>
              <img
                onClick={handleAddButtonClick}
                className="mypagescheduler-plusicon"
                src={MypagePlus}
              ></img>
            </div>
          </div>
          <div className="mypagescheduler-schedule-container">
            <table className="mypagescheduler-schedule-table">
              <thead>
                <tr>
                  <th></th>
                  <th>월요일</th>
                  <th>화요일</th>
                  <th>수요일</th>
                  <th>목요일</th>
                  <th>금요일</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(15)].map((_, i) => (
                  <tr key={`row-${i}`}>
                    <td className="mypagescheduler-time-cell">{i + 1}</td>
                    {[...Array(5)].map((_, j) => {
                      const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][j];
                      const item = scheduleItems.find(
                        item => item.day === day && item.startTime === i + 1,
                      );

                      if (item) {
                        return renderScheduleItem(
                          item.day,
                          item.startTime,
                          item.endTime,
                          item.color,
                          item.subject,
                        );
                      } else {
                        return renderEmptyCell(day, i + 1);
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            {isModalOpen && (
              <div className="mypagescheduler-modal-container" onClick={handleModalBackdropClick}>
                <div className="mypagescheduler-modal-content">
                  <div className="mypagescheduler-modal-body">
                    <AddScheduleModal
                      onSubmit={handleModalSubmit}
                      onCancel={handleModalClose}
                      existingItems={scheduleItems}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DesktopHeader>
      <MobileHeader>
        <div className="tablet-mypagescheduler-maincontainer">
          <div className="tablet-mypagescheduler-titlecontainer">
            <h2 className="tablet-mypagescheduler-mainname">
              <span>SCHOOL</span>
              <span>SCHEDULER</span>
            </h2>
            <div className="tablet-mypagescheduler-iconcontainer">
              <img className="tablet-mypagescheduler-deleteicon" src={MypageDelete}></img>
              <img
                onClick={handleAddButtonClick}
                className="tablet-mypagescheduler-plusicon"
                src={MypagePlus}
              ></img>
            </div>
          </div>
          <div className="tablet-mypagescheduler-schedule-container">
            <table className="tablet-mypagescheduler-schedule-table">
              <thead>
                <tr>
                  <th></th>
                  <th>월요일</th>
                  <th>화요일</th>
                  <th>수요일</th>
                  <th>목요일</th>
                  <th>금요일</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(15)].map((_, i) => (
                  <tr key={`row-${i}`}>
                    <td className="tablet-mypagescheduler-time-cell">{i + 1}</td>
                    {[...Array(5)].map((_, j) => {
                      const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][j];
                      const item = scheduleItems.find(
                        item => item.day === day && item.startTime === i + 1,
                      );

                      if (item) {
                        return renderScheduleItem(
                          item.day,
                          item.startTime,
                          item.endTime,
                          item.color,
                          item.subject,
                        );
                      } else {
                        return renderEmptyCell(day, i + 1);
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            {isModalOpen && (
              <div
                className="tablet-mypagescheduler-modal-container"
                onClick={handleModalBackdropClick}
              >
                <div className="tablet-mypagescheduler-modal-content">
                  <div className="tablet-mypagescheduler-modal-body">
                    <AddScheduleModal
                      onSubmit={handleModalSubmit}
                      onCancel={handleModalClose}
                      existingItems={scheduleItems}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </MobileHeader>
      <Mobile>
        <div className="mobile-mypagescheduler-maincontainer">
          <div className="mobile-mypagescheduler-titlecontainer">
            <h2 className="mobile-mypagescheduler-mainname">SCHOOL SCHEDULER</h2>
            <div className="mobile-mypagescheduler-iconcontainer">
              <img className="mobile-mypagescheduler-deleteicon" src={MypageDelete}></img>
              <img
                onClick={handleAddButtonClick}
                className="mobile-mypagescheduler-plusicon"
                src={MypagePlus}
              ></img>
            </div>
          </div>
          <div className="mobile-mypagescheduler-schedule-container">
            <table className="mobile-mypagescheduler-schedule-table">
              <thead>
                <tr>
                  <th></th>
                  <th>월요일</th>
                  <th>화요일</th>
                  <th>수요일</th>
                  <th>목요일</th>
                  <th>금요일</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(15)].map((_, i) => (
                  <tr key={`row-${i}`}>
                    <td className="mobile-mypagescheduler-time-cell">{i + 1}</td>
                    {[...Array(5)].map((_, j) => {
                      const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'][j];
                      const item = scheduleItems.find(
                        item => item.day === day && item.startTime === i + 1,
                      );

                      if (item) {
                        return renderScheduleItem(
                          item.day,
                          item.startTime,
                          item.endTime,
                          item.color,
                          item.subject,
                        );
                      } else {
                        return renderEmptyCell(day, i + 1);
                      }
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            {isModalOpen && (
              <div
                className="mobile-mypagescheduler-modal-container"
                onClick={handleModalBackdropClick}
              >
                <div className="mobile-mypagescheduler-modal-content">
                  <div className="mobile-mypagescheduler-modal-body">
                    <AddScheduleModal
                      onSubmit={handleModalSubmit}
                      onCancel={handleModalClose}
                      existingItems={scheduleItems}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default MypageScheduler;
