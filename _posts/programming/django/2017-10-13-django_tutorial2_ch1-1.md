---
layout: post
title:  "[Django Advanced Tutorial] Ch1-1. 기획"
date:   2017-10-13 01:50:00
description: 1-1. 블로그 앱 기획
categories:
- programming
- django
- web_programmig
banner_image: /programming/django/python-django-logo.jpg
comments: true
---

기획하기

---

새로운 blog라는 앱을 만들어보면서

Django Advanced Tutorial을 시작하도록 하겠습니다.

Django Tutorial의 내용은 모두 알고있는 것으로 가정하겠습니다.

<br>

그럼 기획부터 시작하겠습니다.

화면, url, template 기획입니다.

<br>

![1.UI-1](https://lh3.googleusercontent.com/gFgaTZtcKqzcv2sWF-GANCKJL6uRsczVwD0R_k-a0pDIgXWD7usOQM1x3pCkjPUBQwCi7eJCLjP7sABtQiXfjGdQNfy94-9zTUne5P3Atd8-NJFJ-YcnzxIIMxHJnXjrSyvisUPhnr8aq106rBYkyAMOmJwAEsEVzBjsdce5hhU74mmAYdfBtZs8zryO_KsrhZXs5-c48_QDGmkKER2hhzdPTZbCV5xtXJ-Lo4ojsycTKyVZPVe25GEDXIvAbziolctqOi7G2bRYsMBIPm31IBE4nZZnmAOywps5Uw9_Qcp3hupggYtP-k0z5DPIh4edML15fhszyK2wcKmN1ag6sf5U91eU5wr1M0gwlLvxwNDYwn3ae6zMwwmzrSk06XbdS4x6mVJF0e1sIy5orDi5WwePfwfKRXngtS83eDNregqogBzX53xt14LVWJpI2LgL3-Ilz6KNfSfaArCIuts1oCBOYKf1mDyu_WAAkId8-Cmp1KJyH7fICZRNFxblKgu_VBndbtbqmOEm6bzhUBXUE6hFuD3nlQySBZHhwKlDAL2I5fgKg86zQhiTa2Pe6v2M5PLAVWl9kxloGAeHCcYvH9Aq-_byEGMDyE2cFTsE3Q=w1038-h659-no)

왼쪽은 첫화면입니다.

Post가 리스트되고, 페이지네이션 기능을 넣을 것입니다.

<br>

Post 타이틀을 클릭하면 해당 포스트의 내용이 뜹니다.

앞, 뒤 포스트로 이동할 수 있는 링크도 달아놉니다.

<br>

![2.UI-2](https://lh3.googleusercontent.com/6sJR7UG6J7DG8eFTx3SrcFKQq8mevkagQpMImPGsM36_sJKFYOnhOazQe1RnNpDEwavIGL74HNn4Fq45aOyd0WloRwmCYtQM1ydAGnCQlCM1bcdmnsYuxRW0cwoFuCoDPk4XupUbruS2odgijIQVhVcspmAEZHoF0ff3RZyhzeqKxqeADMgiSc65fjSElQRpcwL6o5CB1EFncU9FMiLBmdQvUbbfkqtjGP4AW9UjnvSOvvJdAc-0n4eYcmSQ1qhVADwd1vqunZfWTvnuGt3wKgHGAKgzTvF7zJ4-2E5-B8AQ1nR3qbOwdvtfDJy76KwgxiSIbokK5tquVYaTrBJzlKisgI1-VqnFOLNPLUr68ef2_kPCd_C0aXNNDH4gA8HlG1fH2oMdS03eM_wtTlaOm9uM61U_couna8Et7CW6UCmDC6MYQEQGfV6SdeUpF5-PQH3IVqjNKfrfrXDPS4c6EHbn9KC24AHyteI2PHjT9uzPYvAGS-SuvWaJy4nKvHil6kDlQLBcmlEWUQ6Hyx92amg0D5oRi1-nae8aVC-IbaX4ua3tbPlhcjmqF_0PDCI5FMkfDptT2jdXbB9NC28-LX-6aknfoRy4TOHHegxkOA=w914-h522-no)

주소창에 '/blog/archive/'를 입력하면

현재까지 작성한 포스트들이 리스트됩니다.

포스트들을 연도별로 나눌 링크도 달아놉니다.

여기서 Year-2016 을 클릭하면, 밑의 화면으로 이동합니다.

![3.UI-3](https://lh3.googleusercontent.com/xw9VEOlydny42TlNkFAcsiiQWMZGKpzY5PmLkhVXXdf1JKAJTJf_uiKy_2c4QpMqToa-vT-9rfPyTGxHKNrrr64kISppHsZ7t_87wU-BJ9qy4-Tydh4uRRx39Toilw0Tz8Fho0eZdKm8WDb7wkzt9gM9usasvz205-Wpsn5LX89W7cSwlBEDYOsL5PSRbVedcCjNYxQVcK0a87-cnyhASyAicMDi1DT1eHVgLfht-UZ9fky6qf3bMgKuytlbmi7mGVEkbo7ZO9aDZoIHGhQM54LiN6XVhVV_TtyJZBE00fFmqNA6tH55BvnTMLXicvQ2ZTNIMvrBPrp6Gou6MDjYLf7Ro-IAxmF-i_zwgoZk7pwAdaa2AQ0nksPrIZiKqNCr0qTgJRAGTVpZQJfpG4Ks1Q3XAB97QXgfZ9ixpEeK-avLxw06MOR0xtUhkPnwmj8_tSzjQWQIKFni_n0Gza8k7OvfQPPaWiraQ1iwNopBMZiORg6WfDPWdxogVfGN2ffM-9T3WwAI7hcsBwx9ydGtb-DJkQ3ekZ3NnhlTmbz4i96AMZeBtyqmKLOwaCzNwFAzubgtQ9XV5FsWUlvsAC_QCvFB3dXf5sT9_U929u5_mA=w638-h390-no)

2016년도에 작성한 포스트가 리스트됩니다.

이 포스트들을 달별로 나눌 링크도 있습니다.

여기서 October 를 클릭하면 아래 화면이 뜹니다.

![4.UI-4](https://lh3.googleusercontent.com/Oou_zvwj_V8GwMNyoXanXuNXVWar5GalZoHnt6OQn8qIj9B1JxBSF83v-9SPAbysz1qK82ugGTdDdgjlo2C4Y5yYfPAjvhCwgA7-XXM7_B6MoR6PdPBr_7ONFzXWOlzxi11ORnkwFv_cV0L6_aLiZjLPoQ6LgrgmcqL4PqgC4SSxOl7CX459Bt5jAaKMv43_553hxhlGxp0pN2L7f9e3PQ6ii_mBl6Khs9A_sZUKbnn0pn7TojdLiyUNKmZb8sfU_60RLK7LMDlEAmdWYPyNFg_7QjIxG-oPOx6Eh5B8KXWZHLnYc5ZoVQ8ijnMnj4bzlmjo-k5v50DpBgrNPcRzrjRAPimvqtoBcnfAGFD0Suey9lh-RJDZRK3ij24rkNDXjPCegV0-WbqC_94e6SCMR7xuUcabJMhf8Q-Q1WxiTMj4WGxZMZ-o3YNooqTBpCxj_aETgb4zPcRbFk3EE1MHpc03Yq5iAbVB0oGKnjVPbQFnQh7UYIJJNLsuL-OcIGNdXmkbLIDia-aU-0CQw9zZXl7lLJ-XqbvXFigAjpy38y3BHit8ud94SJQ6z0E4r7uWO9ZtZJfJf4rdECx6N_6Ti-9POimtd2LjVB7ORz9wcA=w832-h290-no)

2016년도 10월의 포스트가 리스트됩니다.

<br>

![5.UI-5](https://lh3.googleusercontent.com/4aRXNxoT73F1QZhMuHAwft7tM3jQEBhs-ZEBvx5XPhWs2pueIYUpm_R-hGK2yJGItJl3RU6PWNSV14AFPGXjl9CRSXsFeXpP1toaFLPn-0JHy1ww2wh_QkaMRVeTQTUxjVcsDRtlznO9GQUDFO7ePzJbU_H-oEROaKTRQeSClvyA92z0mYBccyYwUi-wHRIHvZJBwbFYXYVt-P40TWzMkF_mlJiIhx0sQf_6Iog36oHb-wksCwM_oJeB-Kn0B7jFNu0V8UhfQrTQsNchujLLVKpaEqoAU6Dh1zIq5mg_Z3k5eyU5FyLt3vHbhMMottmaZqnH_GMv49GH-cu02vsKTUk-nxKICAXP8XQlb85QXuCJRWQwZ1tp7yRJp7aQgBb2kLefGPQRtEQ4kibjQlsjrfDR53C1jqUWMb-j3Kt6u86Sl2iegzHcE9-JPCgb0m4yfS3W3uUDpHZGWqMC7iTBAkKtOyAloHHkw6qrsQcY0KXjAPkbSXbH3aiE8rkZLpwKTAtZ9H3TQu_NknJkJxvKtUh47kS8d6wMKHzcYt-PxCLM2AdFJTdWOpIIiHQoFyg1srtvRhJ4sph6vj-nJAfNiOT1cKuFpkpXjuSe2dQrsw=w832-h282-no)

주소창에 구체적인 날짜까지 입력하면,

해당 날짜의 포스트가 리스트됩니다.

<br>

![6.UI-6](https://lh3.googleusercontent.com/IGHyVfoBNcWOZl7b1sldNoontf-O_tYe-SVLTd8IXhFAYTUBUS271sKYHKy7x1p0pQq1SDHv46XLfA8r71kn1JBFtfTPJKogjXAQeotqZrA8VDGRJxurTGQTLctzx87hl_f_pdLZ6_P5PvzGs1HWDgAb_U8eSCjVF0VXvOsr9Svyk4eIiGqNMlyogHdsOjenj2C6auMjwNV1_K9tk_b8-XDsiW9yJIgjDdg2etkTcw6a6vb51TEkoxMg19olnG661CpYaAoVSPGr0zWO2k5MCQhe2AYh5sAUw4nE0mWb3rAJbN-9pexQeVBu1RCvBqECaIYjiaH4IgGrV4S0jgqFFOXXS96_zPMxqOGDX2eMsNHyJFec77Ep0g7cTpKo73qLjiETAMPdYup-HyIiPUyv8j-Qrj9VP91-H1apmvCcYtnFAjnXCgqt0Uj5Q3TZXdNS7hPLqj-qIPNifMwzEn7YwuV4zD57kCw3d_BFAkYkJyfGFsUNs-XoKbWCgCwnNwYfPZVH8wfLdvk8OIdZuPyprunHyd4_zdnEux0q1NgtkoyYRCYDacUkgg7R-uv3uET10UOzazEdD0kesMhrMZ18oKFI7MwzqEumS0poGeUELw=w813-h280-no)

today를 입력하면, 오늘 작성한 포스트가 리스트됩니다.