# Comprehensive Test Scenarios

This document outlines detailed test scenarios for the Mietasu application, covering the Landing Page and the Demo Environment.

## Scenario: Landing Page Verification

1.  **Start** at the Home page (`/`).
2.  **Verify** the Hero section is visible with the main title "クラウドに情報を渡さない、唯一のAIナレッジ基盤。".
3.  **Scroll** to the "機能" (Features) section and verify the presence of feature cards (e.g., "完全オンプレミス", "高精度AI要約").
4.  **Scroll** to the "料金プラン" (Pricing) section and verify the three plans: "Starter", "Standard", "Enterprise".
5.  **Click** the "お問い合わせ" (Contact) button in the header.
6.  **Verify** that the contact form modal or section is displayed (or navigation occurs).

## Scenario: Knowledge Base Operations

1.  **Navigate** to the Demo Knowledge Base page (`#/demo/knowledge`).
2.  **Verify** the page title is "ナレッジベース".
3.  **Enter** "技術" into the search bar.
4.  **Verify** that the list is filtered to show items related to "技術" (e.g., "技術開発部").
5.  **Click** on a knowledge item (e.g., "プロジェクトA 企画書").
6.  **Verify** that the document detail view (or modal) is opened.

## Scenario: Minutes and AI Summary

1.  **Navigate** to the Demo Minutes page (`#/demo/minutes`).
2.  **Verify** the page title is "議事録・録音".
3.  **Click** the "新規録音" (New Recording) button.
4.  **Verify** that the recording status indicator appears (simulated).
5.  **Click** the "録音停止" (Stop Recording) button.
6.  **Verify** that a new minutes entry is added to the list.
7.  **Click** on the "AI要約" (AI Summary) tab or button for an entry.
8.  **Verify** that the summary text is displayed.

## Scenario: AI Chat Interaction

1.  **Navigate** to the Demo Chat page (`#/demo/chat`).
2.  **Verify** the chat interface is ready.
3.  **Click** the preset question "最新の議事録を要約して".
4.  **Verify** that a user message "最新の議事録を要約して" appears in the chat history.
5.  **Wait** for the AI response.
6.  **Verify** that an AI response message appears (e.g., starting with "最新の議事録の要約です...").

## Scenario: Settings and User Management

1.  **Navigate** to the Demo Settings page (`#/demo/settings`).
2.  **Verify** the page title is "設定・ユーザー管理".
3.  **Click** on the "ユーザー管理" tab.
4.  **Verify** the list of users is displayed.
5.  **Click** the "招待" (Invite) button.
6.  **Verify** that the invite user modal is displayed.
