import React from "react";

import { Row, Col, Card, CardBody } from "reactstrap";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";

const Table = ({
  data = [],
  columns,
  hasContainer = false,
  className,
  containerClassName,

  heigth = "",
  defaultPageSize = 5,
  includeTables,
  ifTopHeader,
  ...rest
}) => {
  return (
    <>
      <Row>
        <Col md="12">
          <ReactTable
            data={data ? data : []}
            columns={columns}
            defaultPageSize={defaultPageSize}
            previousText="Anterior"
            nextText="Siguiente"
            noDataText="No hay Datos "
            pageText="Página"
            ofText="de"
            rowsText="filas"
            loadingText="cargando"
            style={{
              height: heigth, // This will force the table body to overflow and scroll, since there is not enough room
            }}
            className={`-striped -highlight  -fixed ${className}`}
            freezeWhenExpanded={true}
            {...rest}
          />
        </Col>
      </Row>
    </>
  );
};

export default Table;
