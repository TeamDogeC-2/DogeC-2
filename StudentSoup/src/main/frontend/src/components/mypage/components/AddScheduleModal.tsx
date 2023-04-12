import React, { useEffect, useState } from 'react';
import { AddSchedule } from '../data/MypageContents';
import './addScheduleModal.scss';
import { MypageUserInfo, type UserInfoType } from '../data/MypageUserInfo';

interface Props {
  onSubmit: (
    day: string,
    startTime: number,
    endTime: number,
    color: string,
    subject: string,
  ) => void;
  onCancel: () => void;
  existingItems: Array<{ day: string; startTime: number; endTime: number }>;
}

const AddScheduleModal: React.FC<Props> = ({ onSubmit, onCancel, existingItems }) => {
  const [memberId, setMemberId] = useState<number>();
  const [day, setDay] = useState<string>('Mon');
  const [startTime, setStartTime] = useState<number>(1);
  const [endTime, setEndTime] = useState<number>(1);
  const [color, setColor] = useState<string>('#000000');
  const [subject, setSubject] = useState<string>('');
  useEffect(() => {
    MypageUserInfo()
      .then(res => {
        setMemberId(res.data.memberId);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  const handleSubmit = async () => {
    if (subject === '' || subject === undefined) {
      alert('과목이름을 입력해주세요');
      return;
    }
    // if (memberId) {
    //   try {
    //     await AddSchedule(memberId, day, startTime, endTime, color, subject).then(() =>
    //       alert('성공'),
    //     );
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    onSubmit(day, startTime, endTime, color, subject);
  };
  console.log(memberId, day, startTime, endTime, color, subject);
  return (
    <div className="add-schedule-modal">
      <div className="add-schedule-modal-field">
        <div className="add-schedule-modal-label">요일:</div>
        <select
          className="add-schedule-modal-select"
          id="day"
          value={day}
          onChange={e => setDay(e.target.value)}
        >
          <option value="Mon">월요일</option>
          <option value="Tue">화요일</option>
          <option value="Wed">수요일</option>
          <option value="Thu">목요일</option>
          <option value="Fri">금요일</option>
        </select>
      </div>
      <div className="add-schedule-modal-field">
        <div className="add-schedule-modal-label">시작 시간:</div>
        <select
          className="add-schedule-modal-select"
          id="start-time"
          value={startTime}
          onChange={e => setStartTime(parseInt(e.target.value))}
        >
          {[...Array(15)].map((_, i) => (
            <option key={`start-time-${i}`} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="add-schedule-modal-field">
        <div className="add-schedule-modal-label">종료 시간:</div>
        <select
          className="add-schedule-modal-select"
          id="end-time"
          value={endTime}
          onChange={e => setEndTime(parseInt(e.target.value))}
        >
          {[...Array(15)].map((_, i) => (
            <option key={`end-time-${i}`} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="add-schedule-modal-field">
        <div className="add-schedule-modal-label">색상:</div>
        <input type="color" id="color" value={color} onChange={e => setColor(e.target.value)} />
      </div>
      <div className="add-schedule-modal-field">
        <div className="add-schedule-modal-label">과목이름:</div>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
      </div>
      <div className="add-schedule-modal-footer">
        <button className="add-schedule-modal-cancel-button" onClick={onCancel}>
          취소
        </button>
        <button className="add-schedule-modal-save-button" onClick={handleSubmit}>
          등록
        </button>
      </div>
    </div>
  );
};
export default AddScheduleModal;
