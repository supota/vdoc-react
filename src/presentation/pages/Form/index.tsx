import * as React from "react";
import { useState } from "react";

import { BaseContainer } from "vdoc/presentation/pages/component/BaseContainer";

import { FormContainer } from "./container/FormContainer";

const FormPage = (props: any) => {
  const handleSubmit = async () => {};
  return (
    <BaseContainer>
      <main className="form">
        <h3>
          情報を入力するだけで
          <br />
          自分のページを作成できます。
        </h3>
        <FormContainer />
      </main>
    </BaseContainer>
  );
};

export { FormPage };
