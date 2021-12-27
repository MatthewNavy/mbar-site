import * as React from 'react'

const School = () => {
  return (
    <main>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-dark">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              Trinity University &#127979;
            </div>
            San Antonio, TX
          </div>
          <div className="ms-8">
            <div className="fw-bold">
              2018-2022
            </div>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              Areas of Study
            </div>
            Computer Science major (BS), Mathematics minor
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              Grades
            </div>
            3.64 Cumulative GPA, 3.78 Department GPA
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              Awards
            </div>
            Dean's List x3, Trustees’ Scholarship
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              Involvement
            </div>
            ACM Chapter Vice President, Recruitment Volunteer, Intramural Basketball
          </div>
        </li>
      </ul>
    </main>
  )
}

export default School
