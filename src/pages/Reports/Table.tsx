/* eslint-disable react-hooks/exhaustive-deps */
import { exportExcelv2AntTable } from '@/components/ExcelExport/ExportExcel';
import { convertNumberSm } from '@/components/NumberFormatter';
import { getListReport } from '@/services/badiklat/nodeList';
import { FileExcelOutlined, FilePdfOutlined } from '@ant-design/icons';
import { Button, Card, DatePicker, Select, Space, Table, Typography } from 'antd';
import { isNumber } from 'lodash';
import moment from 'moment';
import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const TableReports: React.FC<{ userType: string; userId: any[]; activeString: string }> = ({
  userId,
  userType,
  activeString,
}) => {
  const [loading, setLoading] = React.useState(true);
  const [loadingPdf, setLoadingPdf] = React.useState(false);
  const [typeFilter, setTypeFilter] = React.useState('range');
  const [dateFilter, setDateFilter] = React.useState<any>(undefined);
  const [headerData, setHeaderData] = React.useState<any[]>([]);
  const [data, setData] = React.useState<any[]>([]);
  const pdfRef = React.useRef<HTMLDivElement>(null);

  const getData = async () => {
    const p = {
      start_date: undefined,
      end_date: undefined,
      periode: undefined,
    };
    if (typeFilter == 'periode' && dateFilter) {
      p.periode = dateFilter.format('YYYY-MM');
    } else if (dateFilter) {
      p.start_date = dateFilter[0].format('YYYY-MM-DD');
      p.end_date = dateFilter[1].format('YYYY-MM-DD');
    }

    const d = await getListReport(typeFilter, {
      ...p,
      user_type: userType,
      user_id: userId,
    });

    setLoading(false);
    if (!d.error) {
      // console.log(d.data, 'DATA');
      if (d.data.length > 0) {
        const header: any[] = [];

        d.data[0].map((val: any) => {
          header.push(val.name);
        });
        d.data.map((val: any, idx: number) => {
          val.map((val2: any) => {
            d.data[idx][val2.name] = val2.value;
          });
        });
        // console.log(d.data, 'DATA');

        // const arr = [];

        // do {
        //   arr.push(d.data[0]);
        // } while (arr.length <= 100);

        // console.log(arr, 'ARR');

        setData(d.data);
        setHeaderData(header);
        // console.log(header, 'HEADER');
      } else {
        setData([]);
        setHeaderData([]);
      }
    }
  };

  React.useEffect(() => {
    setLoading(false);
    if (userId.length > 0) {
      if (userId[0] != 0 && dateFilter) {
        getData();
      } else {
        setData([]);
        setHeaderData([]);
      }
    } else {
      setData([]);
      setHeaderData([]);
    }
  }, [typeFilter, dateFilter, userId]);

  const handleExport = () => {
    exportExcelv2AntTable()(
      'view-log',
      'Reports Room',
      'Reports Room ' + typeFilter + moment().unix(),
    );
  };

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
        pdf.save(`Export-Report-${activeString}-${typeFilter}-${moment().unix()}.pdf`);
      });
    }
  };

  return (
    <Card
      bordered={false}
      style={{
        background: '#FAFAFA',
        minHeight: '79vh',
        textAlign: 'right',
      }}
    >
      <a id="dlink"></a>
      <Typography.Title level={3} style={{ textAlign: 'left', textTransform: 'capitalize' }}>
        Reports {userType}
      </Typography.Title>
      <Space style={{ float: 'left' }}>
        <Select
          value={typeFilter}
          onChange={(v) => {
            setTypeFilter(v);
            setDateFilter(undefined);
            setData([]);
            setHeaderData([]);
          }}
          className="rounded-select"
        >
          <Select.Option value="range">Range</Select.Option>
          <Select.Option value="periode">Periode</Select.Option>
        </Select>

        {typeFilter == 'periode' ? (
          <DatePicker.MonthPicker
            className="rounded-picker"
            value={dateFilter}
            allowClear
            onChange={(value) => setDateFilter(value)}
          />
        ) : (
          <DatePicker.RangePicker
            className="rounded-picker"
            value={dateFilter}
            allowClear
            onChange={(value) => setDateFilter(value)}
          />
        )}
      </Space>
      <Button icon={<FileExcelOutlined />} loading={loading} onClick={handleExport}>
        Export Excel
      </Button>
      <Button
        style={{
          marginLeft: '12px',
        }}
        icon={<FilePdfOutlined />}
        loading={loading || loadingPdf}
        onClick={handleExportPdf}
      >
        Export Pdf
      </Button>
      {typeFilter == 'daily' ? (
        <Table dataSource={data} loading={loading} style={{ marginTop: '16px' }}>
          <Table.Column title="Last Update" dataIndex="last_update" />
          <Table.Column
            title="Totalizer (Kwh)"
            dataIndex="totalizer"
            render={(text) => convertNumberSm(text)}
          />
          <Table.Column
            title="Usage (Kwh)"
            dataIndex="usage"
            render={(text) => convertNumberSm(text)}
          />
        </Table>
      ) : (
        <Table dataSource={data} loading={loading} style={{ marginTop: '16px' }}>
          {headerData.map((val) => {
            const key = Math.random();
            return (
              <Table.Column
                key={key}
                align="left"
                title={val}
                dataIndex={val}
                render={(text) => {
                  if (isNumber(text)) {
                    return convertNumberSm(text);
                  } else {
                    return text;
                  }
                }}
              />
            );
          })}
        </Table>
      )}
      <div style={{ opacity: 0, position: 'fixed', pointerEvents: 'none', zIndex: 'revert-layer' }}>
        <div
          style={{
            width: '1090px',
            // objectFit: "cover",
            position: 'absolute',
            padding: '20px',
          }}
        >
          {typeFilter == 'daily' ? (
            <Table id="view-log" dataSource={data} loading={loading} style={{ marginTop: '16px' }}>
              <Table.Column title="Last Update" dataIndex="last_update" />
              <Table.Column title="Totalizer (Kwh)" dataIndex="totalizer" />
              <Table.Column title="Usage (Kwh)" dataIndex="usage" />
            </Table>
          ) : (
            <Table id="view-log" dataSource={data} loading={loading} style={{ marginTop: '16px' }}>
              {headerData.map((val) => {
                const key = Math.random();
                return <Table.Column key={key} align="left" title={val} dataIndex={val} />;
              })}
            </Table>
          )}
        </div>
      </div>

      <div style={{ opacity: 0, position: 'fixed' }}>
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
          <img
            title="header-pdf"
            alt="header-pdf"
            src="/headerpdf.svg"
            style={{
              width: '100%',
              height: 'auto',
              position: 'relative',
              marginBottom: '29px',
            }}
          />
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
            {typeFilter == 'range' && dateFilter ? (
              <Typography.Text
                style={{
                  fontSize: '12px',
                  lineHeight: '20px',
                  fontWeight: '400',
                }}
              >
                Reports {activeString} Meter from {dateFilter[0].format('YYYY-MM-DD')} -{' '}
                {dateFilter[1].format('YYYY-MM-DD')}
              </Typography.Text>
            ) : (
              <Typography.Text
                style={{
                  fontSize: '12px',
                  lineHeight: '20px',
                  fontWeight: '400',
                }}
              >
                Reports {activeString} Meter Periode {dateFilter?.format('YYYY-MM')}
              </Typography.Text>
            )}
          </div>
          {typeFilter == 'daily' ? (
            <Table
              pagination={false}
              dataSource={data}
              loading={loading}
              style={{ margin: '32px 20px' }}
            >
              <Table.Column title="Last Update" dataIndex="last_update" />
              <Table.Column
                title="Totalizer (Kwh)"
                dataIndex="totalizer"
                render={(text) => convertNumberSm(text)}
              />
              <Table.Column
                title="Usage (Kwh)"
                dataIndex="usage"
                render={(text) => convertNumberSm(text)}
              />
            </Table>
          ) : (
            <Table
              pagination={false}
              dataSource={data}
              loading={loading}
              style={{ margin: '32px 20px' }}
            >
              {headerData.map((val) => {
                const key = Math.random();
                return (
                  <Table.Column
                    key={key}
                    align="left"
                    title={val}
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
          )}
        </div>
      </div>
    </Card>
  );
};

export default TableReports;
