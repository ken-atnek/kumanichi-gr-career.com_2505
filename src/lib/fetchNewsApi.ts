import { BlogItem } from '@/types/blog';

type ApiNewsItem = {
  k_id: number | string;
  k_shop_id: string;
  k_date?: string;
  k_title: string;
  k_thumb?: string;
  k_category: {
    k_parent: string;
    k_child: string;
  };
  k_body: {
    k_content: string;
  };
  k_total?: number;
};

export async function fetchNews(
  shopId: string,
  limit = 3,
  offset = 0,
  apiUrl = `https://kumanichi-gr-career.com/api/news/?sid=${shopId}&limit=${limit}&offset=${offset}`
): Promise<{ news: BlogItem[]; total: number }> {
  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error(`ニュースAPIエラー (${res.status})`);
      return { news: [], total: 0 };
    }
    const rawData: ApiNewsItem[] = await res.json();
    const total = rawData.length > 0 && rawData[0].k_total ? Number(rawData[0].k_total) : 0;
    const news: BlogItem[] = rawData.map((item) => ({
      id: String(item.k_id),
      s_id: item.k_shop_id,
      date: item.k_date || '',
      title: item.k_title,
      thumb: item.k_thumb || '',
      category: {
        parent: item.k_category?.k_parent || '',
        child: item.k_category?.k_child || '',
      },
      body: {
        content: item.k_body?.k_content,
      },
    }));
    //応答
    return { news, total };
  } catch (err) {
    console.error('fetchNews取得失敗:', err);
    return { news: [], total: 0 };
  }
}
