import type { responseTypes } from './base-types';

// 공통 필드
export interface baseMate {
  id: number;
  nickname: string;
  awayTeam: string;
  homeTeam: string;
  stadium: string;
  date: string; 
  matchRate: number;
}

// 단일 매칭 리스트에 쓰이는 mate (프로필 간략 정보 + 단일 이미지)
export interface singleMatchMate extends baseMate {
  age: string;
  team: string;
  style: string;
  imgUrl: string;
}

// 단일 매칭 결과 (프로필 상세 정보 + 단일 이미지)
export interface singleMatchResult extends baseMate {
  age: string;
  gender: string;
  team: string;
  style: string;
  imgUrl: string;
}

// 그룹 매칭 리스트에 쓰이는 mate (count 포함 + 이미지 배열)
export interface groupMatchMate extends baseMate {
  count: number;
  imgUrl: string[];
}

export interface getMatchCountResponse {
  count: number;
}

export interface getSingleMatchResultResponse {
  id: number;
  nickname: string;
  age: string;
  gender: string;
  team: string;
  style: string;
  awayTeam: string;
  homeTeam: string;
  stadium: string;
  date: string;
  imgUrl: string;
}

export interface getSingleMatchListResponse {
  mates: singleMatchMate[];
}

export interface getGroupMatchListResponse {
  mates: groupMatchMate[];
}

export interface getGroupMatchResultResponse {
    id: number;
    nickname: string;
    awayTeam: string;
    homeTeam: string;
    date: string;
    coundt: number;
    imgUrl: string[];
}

export interface postMatchCreateRequest {
    gameId: number;
    matchType: string;
}

export interface postMatchCreateResponse {
    matchId: number;
}

export interface postMatchConditionRequest {
    team: string;
    teamAllowed: string;
    style: string;
    genderPreference: string;
}

export interface patchMatchStageResponse extends responseTypes<null> {}


export interface directMatchMate {
  id: number;
  nickname: string;
  age: string;
  gender: string;  
  team: string;
  style: string;
  awayTeam: string;
  homeTeam: string;
  stadium: string;
  date: string;
  status: string; 
  imgUrl: string;
}


export interface getDirectMatchListResponse {
    mates: directMatchMate[];
}

export interface getGroupMatchMate {
    id: number;
    nickname: string;
    awayTeam: string;
    homeTeam: string;
    stadium: string;
    date: string;
    status: string;
    count: number;
    imgUrl: string[];
}
export interface matchDetailMate {
    id: number;
    nickname: string;
    age: string;
    gender: string;
    introduction: string;
    awayTeam: string;
    homeTeam: string;
    stadium: string;
    date: string;
    status: string;
    count: number;
    imgUrl: string[];
    matchRate: number;
}