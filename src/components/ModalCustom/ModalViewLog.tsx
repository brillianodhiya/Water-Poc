/* eslint-disable react-hooks/exhaustive-deps */
import type { FunctionComponent } from 'react';
import React from 'react'; // importing FunctionComponent
import {
  Button,
  DatePicker,
  Modal,
  Space,
  Table,
  Tag,
  Typography,
  // Typography
} from 'antd';
import moment from 'moment';
import { DownloadOutlined } from '@ant-design/icons';
import { exportExcelv2AntTable } from '../ExcelExport/ExportExcel';
// import { isNumber } from 'lodash';
// import { convertNumberSm } from '../NumberFormatter';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { getDeviceLog } from '@/services/nebula/device';
import { CSVLink } from 'react-csv';

const titleCase = (s: string) =>
  s.replace(/^_*(.)|_+(.)/g, (_, c, d) => (c ? c.toUpperCase() : ' ' + d.toUpperCase()));

type ViewLogTypes = {
  onOk: () => void;
  onCancel: () => void;
  open: boolean;
  device_id: number;
  devEui?: string;
  typeName?: any;
  desc?: string;
};

export const ModalViewLog: FunctionComponent<ViewLogTypes> = ({
  onOk,
  onCancel,
  open,
  device_id,
  devEui,
  typeName,
  desc,
}) => {
  const [loading, setLoading] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loadingPdf, setLoadingPdf] = React.useState(false);
  const [dateFilter, setDateFilter] = React.useState<any>([
    moment().startOf('month'),
    moment().endOf('month'),
  ]);
  const [headerData, setHeaderData] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any[]>([]);
  const pdfRef = React.useRef<HTMLDivElement>(null);

  const getData = async () => {
    const p = {
      start_date: undefined,
      end_date: undefined,
    };
    if (dateFilter) {
      p.start_date = dateFilter[0].format('YYYY-MM-DD');
      p.end_date = dateFilter[1].format('YYYY-MM-DD');
    }

    const d = await getDeviceLog(
      {
        params: {
          start: p.start_date,
          end: p.end_date,
        },
      },
      device_id,
    );

    setLoading(false);
    if (!d.error) {
      // if (d.data.length > 0) {
      //   const header: any[] = [];
      //   d.data[0].map((val: any) => {
      //     header.push(val.name);
      //   });
      //   d.data.map((val: any, idx: number) => {
      //     val.map((val2: any) => {
      //       d.data[idx][val2.name] = val2.value;
      //     });
      //   });
      //   setData(d.data);
      //   setHeaderData(header);
      // }
      console.log(d.data, 'DATA');
      if (d.data) {
        if (d.data.length > 0) {
          // console.log(d.data.log, 'LOG');
          const header: any[] = [];
          // Object.keys(d.data[0]).map((c) => {
          //   header.push(c);
          // });
          d.data[0].map((val: any) => {
            header.push(val.name);
          });
          d.data.map((val: any, idx: number) => {
            val.map((val2: any) => {
              d.data[idx][val2.name] = val2.value;
            });
          });
          setData(d.data);
          setHeaderData(header);
        }
      }
      // console.log(header, 'HEADER');
    }
  };

  React.useEffect(() => {
    setLoading(true);
    if (device_id && open) {
      getData();
    } else {
      // setDateFilter([moment().startOf('month'), moment().endOf('month')]);
      // setHeaderData([]);
      // setData([]);
    }
  }, [dateFilter, device_id, open]);

  React.useEffect(() => {
    if (!device_id) {
      setDateFilter([moment().startOf('month'), moment().endOf('month')]);
      setHeaderData([]);
      setData([]);
    }
  }, [device_id]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleExportPdf = () => {
    if (pdfRef.current) {
      // console.log(pdfRef.current, 'W');
      // console.log(html2pdf);

      // pdf.internal.scaleFactor = 3.75;
      setLoadingPdf(true);
      html2canvas(pdfRef.current, {
        scale: 3, // max 5
      }).then((canvas) => {
        const pdf = new jsPDF('p', 'mm', 'a4');

        const imgProps = pdf.getImageProperties(canvas);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        const pageHeight = pdf.internal.pageSize.getHeight();
        let heightLeft = pdfHeight;
        let position = 0;

        pdf.addImage(canvas, 'PNG', 0, position, pdfWidth, pdfHeight);

        console.log(pdfHeight, 'PDF');

        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - pdfHeight;
          pdf.addPage();
          pdf.addImage(canvas, 'PNG', 0, position, pdfWidth, pdfHeight);
          heightLeft -= pageHeight;
        }
        setLoadingPdf(false);
        pdf.save(
          `Export-Log-${moment(dateFilter[0]).format('YYYY-MM-DD')}-${moment(dateFilter[1]).format(
            'YYYY-MM-DD',
          )}-${moment().unix()}.pdf`,
        );
      });
    }
  };

  return (
    <>
      {/* <div style={{ opacity: 0, position: 'fixed' }}>
        <a id="dlink"></a>
        <Table
          id="view-log"
          dataSource={data}
          loading={loading}
          style={{ marginTop: '16px' }}
          pagination={false}
        >
          {headerData.map((val) => {
            const key = Math.random();
            return <Table.Column key={key} align="left" title={titleCase(val)} dataIndex={val} />;
          })}
        </Table>
      </div> */}
      {/* <div style={{ opacity: 0, position: 'fixed' }}>
        <div
          id="pdf-template"
          ref={pdfRef}
          style={{
            background: '#fff',
            width: '1090px',
            // objectFit: "cover",
            position: 'absolute',
          }}
        >
          <div
            id="header-text"
            style={{
              textAlign: 'center',
            }}
          >
            <Typography.Text
              style={{
                fontSize: '28px',
                lineHeight: '28px',
                fontWeight: '500',
              }}
            >
              Report
            </Typography.Text>
            <br />

            <Typography.Text
              style={{
                fontSize: '12px',
                lineHeight: '20px',
                fontWeight: '400',
              }}
            >
              Export Log Meter from {dateFilter[0].format('YYYY-MM-DD')} -{' '}
              {dateFilter[1].format('YYYY-MM-DD')}
            </Typography.Text>
          </div>

          <Table
            pagination={false}
            dataSource={data}
            loading={loading}
            style={{ margin: '32px 20px' }}
            id="view-log"
          >
            {headerData.map((val) => {
              const key = Math.random();
              return (
                <Table.Column
                  key={key}
                  align="left"
                  title={titleCase(val)}
                  dataIndex={val}
                  render={(
                    text,
                    // , record, idx
                  ) => {
                    // if (val !== 'Location') {
                    if (isNumber(text)) {
                      return convertNumberSm(text);
                    } else {
                      return text;
                    }
                    // } else {
                    //   return 'TEST' + idx;
                    // }
                  }}
                />
              );
            })}
          </Table>
        </div>
      </div> */}
      <Modal
        width={928}
        title={
          <Typography style={{ fontWeight: 'bold' }}>
            {'Log Device ' + devEui} <br />
            <span style={{ fontWeight: 'normal', opacity: '0.8' }}>{desc}</span>
          </Typography>
        }
        open={open}
        onOk={() => {
          setDateFilter([moment().startOf('month'), moment().endOf('month')]);
          setHeaderData([]);
          setData([]);
          onOk();
        }}
        onCancel={() => {
          setDateFilter([moment().startOf('month'), moment().endOf('month')]);
          setHeaderData([]);
          setData([]);

          onCancel();
        }}
        okText="Save"
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <div style={{ textAlign: 'left' }}>
          <DatePicker.RangePicker
            className="rounded-picker"
            value={dateFilter}
            allowClear
            onChange={(value) => setDateFilter(value)}
          />
          <Space wrap style={{ float: 'right' }}>
            <CSVLink
              data={data.map((v) => {
                const obj = {};
                headerData.map((val) => {
                  obj[val] = v[val];
                });
                return obj;
              })}
              filename={'Log Devices' + ' ' + devEui + ' ' + moment().unix()}
              target="_blank"
            >
              <Button icon={<DownloadOutlined />}>Download CSV</Button>
            </CSVLink>

            {/* <Button
              icon={<ExportOutlined />}
              loading={loading || loadingPdf}
              onClick={handleExportPdf}
            >
              Export
            </Button> */}
          </Space>
        </div>
        <div>
          <Table dataSource={data} loading={loading} style={{ marginTop: '16px' }}>
            {headerData.map((val) => {
              const key = Math.random();
              return (
                <Table.Column
                  key={key}
                  align="left"
                  title={titleCase(val)}
                  dataIndex={val}
                  render={(text) => {
                    if (text == 'YES') {
                      return <Tag color="red">{text}</Tag>;
                    } else if (text == 'NO') {
                      return <Tag color="green">{text}</Tag>;
                    } else {
                      return text;
                    }
                  }}
                />
              );
            })}
          </Table>
        </div>
      </Modal>
    </>
  );
};
