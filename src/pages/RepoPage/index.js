import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import RepoCard from "../../components/index";
import { useParams } from 'react-router';
import { getRepos } from "../../actions";
import "./style.css";

function RepoPage() {
  const { username } = useParams();
  const result = useSelector((state) => state.result);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);



  return 
}

export default RepoPard;