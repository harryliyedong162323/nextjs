"use client";

import React, { useEffect, useState, useCallback } from "react";

interface componentData {
  id: number;
}
function ErrorComponent() {
  const data: Array<componentData> = [];
  return <div>{data[1].id}</div>;
}

export default ErrorComponent;
