/* eslint-disable no-debugger */
/* eslint-disable eqeqeq */
/* eslint-disable react/destructuring-assignment */
import Loader from 'Components/Loader';
import NoDataFound from 'Components/NoDataFound';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as XLSX from 'xlsx';

import { getUsersList } from './redux/action';

const Table = (props: any) => {
  async function FetechUsers() {
    await getUsersList({
      pgno: 1,
      row: 25,
    });
  }

  useEffect(() => {
    FetechUsers();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const exportFile = () => {
    if (props.users && props.users.length > 0) {
      const date = new Date();
      const filename = `User-${date.getTime()}.xlsx`;
      const wsName = 'Sheet';

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(props.users);
      // add worksheet to workbook /
      XLSX.utils.book_append_sheet(wb, ws, wsName);
      // write workbook /
      XLSX.writeFile(wb, filename);
    }
  };

  return (
    <>
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="content-header row">
          <div className="content-header-left col-md-6 mb-2">
            <h3 className="content-header-title">Manage Users</h3>

            <div className="input-group mb-3 mng-roles-add">
              <button
                className="btn btn-primary"
                type="button"
                onClick={exportFile}
              >
                Export user
              </button>
            </div>
          </div>
          <div className="content-header-right col-md-6 mb-2">
            <div className="content-header-action"></div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="row">
            <div className=" col-lg-10">
              <NoDataFound data={props.users} />
              <Loader loader={props.loader} />
              {props.users && props.users.length > 0 && (
                <div className="data-table-container">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Message</th>
                          <th>Created On </th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.users &&
                          props.users.map((e: any) => {
                            return (
                              <tr key={e._id}>
                                <td className="font-w-600">{e.fullName}</td>
                                <td>{e.email}</td>
                                <td>{e.message}</td>
                                <td>{e.createdOn}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
function mapStateToProps({ adminResucer }: any) {
  return adminResucer;
}
export default connect(mapStateToProps, {})(Table);
